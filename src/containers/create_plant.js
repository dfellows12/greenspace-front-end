import React, { Component } from "react"
import { Form, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { creatingPlant } from "../redux/actions"


class CreatePlant extends Component {
state = {
    name: '',
    scientific_name: '',
    water_schedule: '',
    fertilizer_schedule: '',
    plant_info: '',
    category: '',
    image: ''
}

handleSubmit = e => {
    e.preventDefault()
    let info = {
        name: this.state.name,
        scientific_name: this.state.scientific_name,
        water_schedule: this.state.water_schedule, fertilizer_schedule: this.state.fertilizer_schedule, plant_info: this.state.plant_info,
        category: this.state.category,
        image: this.state.image
    }
    return this.props.creatingPlant(info);
}

    render() {
    return(
        <div>
            <h1>Create a plant!</h1>
            <Form onSubmit={event => this.handleSubmit(event)}>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder="" />
                </Form.Field>
                <Form.Field>
                    <label>Scientific name</label>
                    <input placeholder="" />
                </Form.Field>
                <Form.Field>
                    <label>Water schedule</label>
                    <input placeholder="" />
                </Form.Field>
                <Form.Field>
                    <label>Fertilizer schedule</label>
                    <input placeholder="" />
                </Form.Field>
                <Form.Field label='Plant info' control='textarea' />
                <Form.Field label='Category' control='select'>
                    <option value='flowering'>Flowering</option>
                    <option value='foliage'>Foliage</option>
                    <option value='succulent and cacti'>Succulent and Cacti</option>
                </Form.Field>
                <Form.Field>
                    <input type="file" name='photo' onChange={this.handleOnChange} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
    }
}

const mapDispatchToProps = dispatch => ({
    creatingPlant: (info) => {dispatch(creatingPlant(info))}
  });

export default connect(null, mapDispatchToProps)(CreatePlant)