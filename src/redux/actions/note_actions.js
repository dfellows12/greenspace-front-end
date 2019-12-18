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

function addNote(note) {
    return {type: "ADD_NOTE", payload: note}
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

function addingNote(note, userPlantId, userId){
    return (dispatch) => {
      fetch(`http://localhost:3000/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            userPlantId: userPlantId,
            userId: userId,
            note: note
        })
      })
      .then(resp => resp.json())
      .then(note => dispatch(addNote(note)))
    }
}

export {fetchingNotes, addingNote, deletingNote}