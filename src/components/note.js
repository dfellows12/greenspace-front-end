import React from 'react'
import { Button } from 'semantic-ui-react'
import { deletingNote} from '../redux/actions/note_actions'
import { connect } from "react-redux";

const Note = props => {
    return(
        <div className="note-input-container">
            <p className="note-text"> {props.note.created_at.split("T")[0]} - {props.note.content} <Button className="delete-note-button"size="mini" onClick={() => {
                props.deletingNote(props.note)
            }}size='small'>Delete</Button> </p>
            
        </div>   
    )
}

const mapDispatchToProps = dispatch => ({
    deletingNote: (noteInfo) => {dispatch(deletingNote(noteInfo))}
})

export default connect(null, mapDispatchToProps)(Note)