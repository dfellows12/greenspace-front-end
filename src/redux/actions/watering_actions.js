function fetchedWaterings(waterings) {
  return {type: "FETCH_WATERINGS", payload: waterings}
}

function fetchingWaterings() {
  return (dispatch) => {
      fetch("http://localhost:3000/waterings")
      .then(resp => resp.json())
      .then(result => {
          dispatch(fetchedWaterings(result))
      })
  }
}

function creatingWatering(watering){
    return (dispatch) => {
      fetch(`http://localhost:3000/waterings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            user_plant_id: watering.userPlant.id,
            user_id: watering.userPlant.user_id,
            wateringSchedule: watering.nextWaterDate
        })
      })
      .then(resp => resp.json())
      .then(watering => {
          dispatch(createWatering(watering))})
    }
}

function createWatering(watering) {
    return {type: "CREATE_WATERING", payload: watering}
}

export {creatingWatering, fetchingWaterings}