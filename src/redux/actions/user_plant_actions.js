

function fetchedUserPlants(userplants) {
    return {type: "FETCH_USER_PLANTS", payload: userplants}
}

function fetchingUserPlants() {
    return (dispatch) => {
        fetch("http://localhost:3000/user_plants")
        .then(resp => resp.json())
        .then(result => {
            dispatch(fetchedUserPlants(result))
        })
    }
}

function addUserPlant(plant) {
    return {type: "ADD_USER_PLANT", payload: plant}
}

function deleteUserPlant(userplant) {
    return {type: "DELETE_USER_PLANT", payload: userplant}
}

function deletingUserPlant(userplant){
    return (dispatch) => {
        fetch(`http://localhost:3000/user_plants/${userplant.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: JSON.stringify({
                  userplant: userplant
              })
            })
            .then(resp => resp.json())
            .then(userPlant => dispatch(deleteUserPlant(userPlant)))
    }
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

function updateUserPlant(userplant) {
    return {type: "UPDATE_USER_PLANT", payload: userplant}
}

function updatingUserPlant(userplant) {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_plants/${userplant.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: JSON.stringify({
                  userplant: userplant
              })
            })
        .then(resp => resp.json())
        .then(userPlant => {
            dispatch(updateUserPlant(userPlant))})
    }
}
  
export {fetchingUserPlants, addingUserPlant, deletingUserPlant, updatingUserPlant}