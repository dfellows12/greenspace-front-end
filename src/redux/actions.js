import { DirectUpload } from 'activestorage';

function loginUser(info){
    return {type: "LOGIN_USER", payload: info}
}

function logUserOut(info){
    return {type: "LOGOUT_USER"}
}

function createUser(info){
    return {type: "CREATE_USER", payload: info}
}

function creatingUser(info) {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
            },
            body: JSON.stringify({
            "name" : `${info.name}`,
            "password" : `${info.password}`,
            "email": `${info.email}`,
            "phone_number": `${info.phone_number}`
            })
        })
    .then(resp => resp.json())
    .then(user => {
        dispatch(createUser(user))})
    }
}

function loggingUser(info){
    return (dispatch) => {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({
            "name" : `${info.name}`,
            "password" : `${info.password}`,
        })
      })
    .then(resp => resp.json())
    .then(resp => {
        if (resp.message === "User/Password not found") {
            alert("Username/Password invalid")
        }
        else {
            dispatch(loginUser(resp))
        }
    })
    }
}

function fetchedPlants(plants) {
    return {type: "FETCH_PLANTS", payload: plants}
}

function fetchingPlants() {
    return (dispatch) => {
        fetch("http://localhost:3000/plants")
        .then(resp => resp.json())
        .then(result => 
            {dispatch(fetchedPlants(result))})
    }
}

function fetchedUserPlants(userplants) {
    return {type: "FETCH_PLANTS", payload: userplants}
}

function fetchingUserPlants() {
    return (dispatch) => {
        fetch("http://localhost:3000/userplants")
        .then(resp => resp.json())
        .then(result => {
            dispatch(fetchedUserPlants(result))
        })
    }
}

function addUserPlant(plant) {
    return {type: "ADD_USER_PLANT", payload: plant}
}

function createPlant(plant) {
    return {type: "CREATE_PLANT", payload: plant}
}

function creatingPlant(info) {
    let file = info.image
    return (dispatch) => {
        fetch(`http://localhost:3000/plants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({info})
        })
        .then(resp => resp.json())
        .then(plant =>  uploadFile(file, plant))     
    }
}

let uploadFile = (file, plant) => {
    const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
        if (error) {
            console.log(error)
        } else {
            return (dispatch) => {
            fetch(`http://localhost:3000/plants/${plant.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({image: blob.signed_id})
            })
            .then(resp => resp.json())
            .then(plant => dispatch(createPlant(plant)))
        }}
    })
}



function addingUserPlant(info, userId){
    return (dispatch) => {
      fetch(`http://localhost:3000/user_plants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            plant: info,
            userId: userId
        })
      })
      .then(resp => resp.json())
      .then(userPlant => dispatch(addUserPlant(userPlant)))
    }
}
  
export {loggingUser, logUserOut, creatingUser, fetchingPlants, fetchingUserPlants, creatingPlant, addingUserPlant}