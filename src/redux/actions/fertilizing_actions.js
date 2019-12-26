function fetchedFertilizings(fertilizings) {
  return {type: "FETCH_FERTILIZINGS", payload: fertilizings}
}

function fetchingFertilizings() {
  return (dispatch) => {
      fetch("http://localhost:3000/fertilizings")
      .then(resp => resp.json())
      .then(result => {
          dispatch(fetchedFertilizings(result))
      })
  }
}

function creatingFertilizing(info){
    return (dispatch) => {
      fetch(`http://localhost:3000/fertilizings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            user_plant_id: info.userPlant.id,
            user_id: info.userPlant.user_id,
            fertilizingSchedule: info.nextFertilizingDate
        })
      })
      .then(resp => resp.json())
      .then(fertilizing => {
          dispatch(createFertilizing(fertilizing))})
    }
}

function createFertilizing(fertilizing) {
    return {type: "CREATE_FERTILIZING", payload: fertilizing}
}

export { creatingFertilizing, fetchingFertilizings }