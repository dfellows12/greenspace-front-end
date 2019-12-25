function creatingFertilizing(fertilizingSchedule, userId, userPlantId){
    return (dispatch) => {
      fetch(`http://localhost:3000/fertilizings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            user_plant_id: userPlantId,
            user_id: userId,
            fertilizingSchedule: fertilizingSchedule
        })
      })
      .then(resp => resp.json())
      .then(fertilizing => {
          dispatch(createFertilizing(fertilizing))})
    }
}

function createFertiziling(fertiziling) {
    return {type: "CREATE_FERTILIZING", payload: fertiziling}
}