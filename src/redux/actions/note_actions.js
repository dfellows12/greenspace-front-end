function fetchedNotes(notes) {
    return {type: "FETCH_NOTES", payload: notes}
}

function fetchingNotes() {
    return (dispatch) => {
        fetch("http://localhost:3000/notes")
        .then(resp => resp.json())
        .then(result => {
            dispatch(fetchedNotes(result))
        })
    }
}

function createNote(note) {
    return {type: "CREATE_NOTE", payload: note}
}

function deleteNote(note) {
    return {type: "DELETE_NOTE", payload: note}
}

function deletingNote(note){
    return (dispatch) => {
        fetch(`http://localhost:3000/notes/${note.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: JSON.stringify({
                  note: note
              })
            })
            .then(resp => resp.json())
            .then(note => dispatch(deleteNote(note)))
    }
}

function creatingNote(note, userPlantId, userId){
    debugger
    return (dispatch) => {
      fetch(`http://localhost:3000/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            user_plant_id: userPlantId,
            user_id: userId,
            note: note
        })
      })
      .then(resp => resp.json())
      .then(note => {
          dispatch(createNote(note))})
    }
}

export {fetchingNotes, creatingNote, deletingNote}