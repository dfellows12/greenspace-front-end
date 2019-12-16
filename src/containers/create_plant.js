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


handleOnChange = e => {
    if (e.target.name === 'image') {
        this.setState({ [e.target.name]: e.target.files[0] })
    } else {
        this.setState({[e.target.name]: e.target.value})
    }
}

handleSubmit = e => {
    e.preventDefault()
    let info = {
        name: this.state.name,
        scientific_name: this.state.scientific_name,
        water_schedule: this.state.water_schedule,
        fertilizer_schedule: this.state.fertilizer_schedule, 
        plant_info: this.state.plant_info,
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
                    <input placeholder="Name"
                        name="name"
                        onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Scientific name</label>
                    <input 
                        name="scientific_name"
                        onChange={this.handleOnChange} />
                </Form.Field>
                <Form.Field>
                    <label>Water schedule</label>
                    <input 
                        name='water_schedule'
                        onChange={this.handleOnChange} />
                </Form.Field>
                <Form.Field>
                    <label>Fertilizer schedule</label>
                    <input 
                        name='fertilizer_schedule'
                        onChange={this.handleOnChange} />
                </Form.Field>
                <Form.Field label='Plant info' control='textarea'
                    name='plant_info'
                    onChange={this.handleOnChange} />
                <Form.Field label='Category' control='select'
                    name='category'
                    onChange={this.handleOnChange}>
                    <option value='flowering'>Flowering</option>
                    <option value='foliage'>Foliage</option>
                    <option value='succulent and cacti'>Succulent and Cacti</option>
                </Form.Field>
                <Form.Field>
                    <input type="file" name='image'
                    onChange={this.handleOnChange} />
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