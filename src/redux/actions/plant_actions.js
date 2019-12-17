import { DirectUpload } from 'activestorage';


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

function createPlant(plant) {
    return {type: "CREATE_PLANT", payload: plant}
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

export {fetchingPlants, creatingPlant}