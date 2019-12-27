import React, { Component } from "react"
import { Form, Modal, Header, Card, Image, Button} from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { deletingUserPlant, updatingUserPlantSchedule } from '../redux/actions/user_plant_actions'
import { creatingNote } from '../redux/actions/note_actions'
import { creatingFertilizing } from '../redux/actions/fertilizing_actions'
import { creatingWatering } from '../redux/actions/watering_actions'
import Note from './note'

class UserPlantCard extends Component {

  state = {
    note: '',
    wateringSchedule: null,
    fertilizingSchedule: null
}
    addDays = (theDate, days) => {
      return new Date(theDate.getTime() + days*24*60*60*1000)
    }

    handleSubmit = (event) => {
      event.preventDefault()
      let info = {
        note: this.state.note,
        userId: this.props.currentUser.id,
        userPlantId: this.props.user_plant.id
      }
      event.target.note.value = ""
      return this.props.creatingNote(info);
    }

    handleDaySubmit = (event) => {
      event.preventDefault()
      if (this.state.wateringSchedule){
        let schedule = this.addDays(new Date(), this.state.wateringSchedule)
        let info = {
          nextWaterDate: schedule,
          wateringSchedule: this.state.wateringSchedule,
          userPlant: this.props.user_plant
        }
        this.props.creatingWatering(info)
        this.props.updatingUserPlantSchedule(info)
      }
      if (this.state.fertilizingSchedule){
        let schedule = this.addDays(new Date(), this.state.fertilizingSchedule)
        let info = {
          nextFertilizingDate: schedule,
          fertilizingSchedule: this.state.fertilizingSchedule,
          userPlant: this.props.user_plant
        }
        this.props.creatingFertilizing(info)
        this.props.updatingUserPlantSchedule(info)
      }
      
    }

    handleWatering = () => {
      if (!this.props.user_plant.water_schedule) {
        alert("Please create a watering schedule")
      }
      else {
        let schedule = this.addDays(new Date(), this.props.user_plant.water_schedule)
        let info = {
          nextWaterDate: schedule,
          userPlant: this.props.user_plant
        }
        return this.props.creatingWatering(info)
      }
    }

    handleFertilizing = () => {
      if (!this.props.user_plant.fertilizer_schedule) {
        alert("Please create a fertilizing schedule")
      }
      else {
        let schedule = this.addDays(new Date(), this.props.user_plant.fertilizer_schedule)
        let info = {
          nextFertilizingDate: schedule,
          userPlant: this.props.user_plant
        }
        return this.props.creatingFertilizing(info)
      }
    }

    lastWatering = (userplantid) => {
      if (this.props.currentWaterings.length > 0) {
        let waterings = this.props.currentWaterings.filter(watering => watering.user_plant_id === userplantid)
        if (waterings.length > 0) {
          return waterings.slice(-1)[0].schedule
        }
        else {return "Select a day"}
      }
    }

    lastFertilizing = (userplantid) => {
      if (this.props.currentFertilizings.length > 0) {  
        let fertilizings = this.props.currentFertilizings.filter(fertilizing => fertilizing.user_plant_id === userplantid)
        if (fertilizings.length > 0) {
    
          return fertilizings.slice(-1)[0].schedule
        }
        else {return "Select a day"}
      }
    }

    render() {
    return(
        <div>
            <Card className="plant-card">
                <Card.Content>
                  <img className="plant-image" src={this.props.user_plant.image_url} alt="plant"/>
                  <div className="divider"></div>
                  <h2>{this.props.user_plant.name}</h2>
                  <p className='sci-name'>{this.props.user_plant.scientific_name}</p>
                    <p>Next water: {this.lastWatering(this.props.user_plant.id)} </p>
                    <p>Next fertilizing: {
                      this.lastFertilizing(this.props.user_plant.id)}</p>
                    <Button
                      onClick={event => this.handleWatering(event)}>
                      Water</Button>
                    <Button
                    onClick={event => this.handleFertilizing(event)}>
                    Fertilize</Button>
                     <Modal size="mini" trigger={<Button>Change schedule</Button>}>
                     <Form name="days" onSubmit={event => this.handleDaySubmit(event)}>
                      <Form.Field>
                        <label>Input number of days between waterings</label>
                        <input  onChange={e => this.setState({wateringSchedule: e.target.value})}type="number" max={365}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Input number of days between fertilizings</label>
                        <input  onChange={e => this.setState({fertilizingSchedule: e.target.value})}type="number" max={365}/>
                      </Form.Field>
                      <Form.Field control={Button}>Submit</Form.Field>
                    </Form>
                </Modal>
                </Card.Content>
                <Modal trigger ={<Button>Notes Log</Button>}>
                  <Modal.Header>{this.props.user_plant.name}</Modal.Header>
                  <Modal.Content image scrolling>
                    <Image size='medium' src={this.props.user_plant.image_url} wrapped />
                    <Modal.Description>
                      <Header>Notes Log</Header>
                      <Form onSubmit={event => this.handleSubmit(event)}>
                        <Form.Field control="text-area">
                          <label>Note</label>
                          <input
                          onChange={e => this.setState({note: e.target.value})}
                          name="note" />
                        <Button>Create Note</Button>
                        </Form.Field>
                      </Form>
                      <div> {this.props.currentNotes.map( note => {
                        return <Note note={note} />
                      })}
                        </div>>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
                <Button onClick={() => {
                    this.props.deletingUserPlant(this.props.user_plant)
                }}>Remove plant</Button>
                <Link to={`/user_plants/${this.props.user_plant.id}/edit`}><Button>Update plant</Button></Link>
            </Card>
        </div>
    )
}}



const mapDispatchToProps = dispatch => ({
    deletingUserPlant: (userPlant) => {dispatch(deletingUserPlant(userPlant))},
    updatingUserPlantSchedule: (info) => {dispatch(updatingUserPlantSchedule(info))},
    creatingNote: (noteInfo) => {dispatch(creatingNote(noteInfo))},
    creatingWatering: (watering) => {dispatch(creatingWatering(watering))},
    creatingFertilizing: (fertilizing) => {dispatch(creatingFertilizing(fertilizing))}
})

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentNotes: state.currentNotes,
    currentWaterings: state.currentWaterings,
    currentFertilizings: state.currentFertilizings
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPlantCard)

 