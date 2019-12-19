import React, { Component } from "react"
import { Form, Button } from 'semantic-ui-react'
import { connect } from "react-redux";
import { updatingUserPlant } from "../redux/actions/user_plant_actions"


class UpdateUserPlant extends Component {

state = {
    id: "",
    name: '',
    scientific_name: '',
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
        plant_info: this.state.plant_info,
        category: this.state.category,
        image: this.state.image
    }
    return this.props.updatingUserPlant(info);
}

    render() {
    return(
        <div className="form-page">
            <Form className="plant-form" onSubmit={event => this.handleSubmit(event)}>
            <h1>Edit plant</h1>
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
    updatingUserPlant: (info) => {dispatch(updatingUserPlant(info))}
  });

export default connect(null, mapDispatchToProps)(UpdateUserPlant)