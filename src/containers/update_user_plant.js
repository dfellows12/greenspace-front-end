import React, { Component } from "react"
import { Form, Button } from 'semantic-ui-react'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { updatingUserPlant } from "../redux/actions/user_plant_actions"

class UpdateUserPlant extends Component {

    state = {
        id: '',
        name: '',
        scientific_name: '',
        info: '',
        category: '',
        image: ''
    }

    componentDidMount() {
        const id = this.props.id
        fetch(`http://localhost:3000/user_plants/${id}`)
        .then(resp => resp.json())
        .then(user_plant => {
            this.setState ({
                id: user_plant.id,
                name: user_plant.name,
                scientific_name: user_plant.scientific_name,
                info: user_plant.info,
                category: user_plant.category,
                image: user_plant.image_url
            })
        })
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
        id: this.state.id,
        name: this.state.name,
        scientific_name: this.state.scientific_name,
        info: this.state.info,
        category: this.state.category,
        image: this.state.image
    }
    this.props.updatingUserPlant(info);
    this.props.history.push('/user_plants')
}

    render() {
    return(
        <div className="form-page">
            <Form className="plant-form" onSubmit={event => this.handleSubmit(event)}>
            <h1>Edit plant</h1>
                <Form.Field>
                    <label>Name</label>
                    <input 
                        value={this.state.name}
                        name="name"
                        onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Scientific name</label>
                    <input
                        value={this.state.scientific_name}
                        name="scientific_name"
                        onChange={this.handleOnChange} />
                </Form.Field>
                <Form.Field
                    value={this.state.info}
                    label='Info' 
                    control='textarea'
                    name='info'
                    onChange={this.handleOnChange} />
                <Form.Field 
                    value={this.state.category}
                    label='Category' 
                    control='select'
                    name='category'
                    onChange={this.handleOnChange}>
                    <option value='none'>None</option>
                    <option value='flowering'>Flowering</option>
                    <option value='foliage'>Foliage</option>
                    <option value='succulent and cacti'>Succulent and Cacti</option>
                </Form.Field>
                <Form.Field value={this.state.image_url}>
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

export default withRouter(connect(null, mapDispatchToProps)(UpdateUserPlant))