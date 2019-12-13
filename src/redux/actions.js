function loginUser(info){
    return {type: "LOGIN_USER", payload: info}
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
        if (resp.message === "User not found") {
            alert("Username/Password invalid")
        }
        else {
            dispatch(loginUser(resp))
        }
    })
    }
}

function fetchedPlants(plants) {
    debugger
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
  
export {loggingUser, creatingUser, fetchingPlants}