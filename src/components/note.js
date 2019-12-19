import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import { deletingNote} from '../redux/actions/note_actions'
import { connect } from "react-redux";

const Note = props => {
    return(
        <div>
            <p> - {props.note.content}</p>
            <Button onClick={() => {
                props.deletingNote(props.note)
            }}size='small'>Delete</Button> 
        </div>   
    )
}

const mapDispatchToProps = dispatch => ({
    deletingNote: (noteInfo) => {dispatch(deletingNote(noteInfo))}
})

export default connect(null, mapDispatchToProps)(Note)