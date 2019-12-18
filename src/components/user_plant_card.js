import React, { Component } from "react"
import { Form, Modal, Header, Card, Image, Icon, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { deletingUserPlant } from '../redux/actions/user_plant_actions'
import { fetchingNotes, addingNote, deletingNote } from '../redux/actions/note_actions'


class UserPlantCard extends Component {


    handleSubmit = (event) => {
      let info = {
        note: event.target.note,
        userId: this.props.currentUser.id,
        userPlantId: this.props.user_plant.id
      }
      return this.props.creatingNote(info);
    }

    render() {
    return(
        <div>
            <Card className="plant-card">
                <Card.Content>
                  <img className="plant-image" src={this.props.user_plant.image_url}/>
                  <div className="divider"></div>
                  <h2>{this.props.user_plant.name}</h2>
                  <p className='sci-name'>{this.props.user_plant.scientific_name}</p>  
                </Card.Content>
                <Modal trigger ={<Button>Notes Log</Button>}>
                  <Modal.Header>{this.props.user_plant.name}</Modal.Header>
                  <Modal.Content image scrolling>
                    <Image size='medium' src={this.props.user_plant.image_url} wrapped />
                    <Modal.Description>
                      <Header>Notes Log</Header>
                      <Form>
                        <Form.Field onSubmit={event => this.handleSubmit(event)}control="text-area">
                          <label>Note</label>
                          <input name="note" />
                        <Button>Create Note</Button>
                        </Form.Field>
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
                <Button onClick={() => {
                    this.props.deleteUserPlant(this.props.user_plant)
                }}>Edit plant</Button>
                <Button onClick={() => {
                    this.props.deleteUserPlant(this.props.user_plant)
                }}>Remove plant</Button>
               

             
            </Card>
        </div>
    )
}}

const mapDispatchToProps = dispatch => ({
    deleteUserPlant: (userPlantInfo) => {dispatch(deletingUserPlant(userPlantInfo))},
    addingNote: (noteInfo) => {dispatch(addingNote(noteInfo))},
    deletingNote: (noteInfo) => {dispatch(deletingNote(noteInfo))}
})

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentNotes: state.currentNotes
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPlantCard)

 