import React, { Component } from "react"
import { Form, Card, Image, Icon, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { deletingUserPlant } from '../redux/actions/user_plant_actions'
import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';


class UserPlantCard extends Component {
    state = {
        date: '',
        time: '',
        dateTime: '',
        datesRange: ''
      };

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
      }

    render() {
    return(
        <div>
            <Card className="plant-card">
                <Card.Content>
                  <img className="plant-image" src={this.props.user_plant.image_url}/>
                  <div class="divider"></div>
                  <h2>{this.props.user_plant.name}</h2>
                  <p className='sci-name'>{this.props.user_plant.scientific_name}</p>  
                </Card.Content>
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
    deleteUserPlant: (userPlantInfo) => {dispatch(deletingUserPlant(userPlantInfo))}
})

export default connect(null, mapDispatchToProps)(UserPlantCard)

        {/* <Form>
        <DateInput
          name="date"
          placeholder="Date"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange}
        />
        <TimeInput
          name="time"
          placeholder="Time"
          value={this.state.time}
          iconPosition="left"
          onChange={this.handleChange}
        />
        <DateTimeInput
          name="dateTime"
          placeholder="Date Time"
          value={this.state.dateTime}
          iconPosition="left"
          onChange={this.handleChange}
        />
        <DatesRangeInput
          name="datesRange"
          placeholder="From - To"
          value={this.state.datesRange}
          iconPosition="left"
          onChange={this.handleChange}
        /> */}
      {/* </Form> */}
