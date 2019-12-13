import React, { Component } from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'
import { creatingUser } from "../redux/actions"



class CreateUser extends Component {

    state = {
        name: '',
        password: '',
        email: '',
        phone_number: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        let info = {name: this.state.name, password: this.state.password, email: this.state.email, phone_number: this.state.phone_number}
        this.props.creatingUserInfo(info);
        this.props.history.push('/about')

      };

    render() {
        return (
                <div className="login">
                    <div className="loginform">
                        <h2>Create your own</h2>
                        <h1>Create your GreenSpace account</h1>
                        <Form onSubmit={event => this.handleSubmit(event)}>
                            <Form.Field>
                                <label>Username</label>
                                <input 
                                name="username"
                                onChange={e => this.setState({name: e.target.value})}
                                placeholder='Username' />
    
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input 
                                name="password"
                                onChange={e => this.setState({password: e.target.value})}
                                placeholder='Password' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input 
                                name="email"
                                onChange={e => this.setState({email: e.target.value})}
                                placeholder='Email' />
                            </Form.Field>
                            <Form.Field>
                                <label>Phone Number</label>
                                <input 
                                name="phone_number"
                                onChange={e => this.setState({phone_number: e.target.value})}
                                placeholder='Phone Number' />
                            </Form.Field>
                           <Button type='submit'>Submit</Button>
                            <button className="ui black inverted basic button">Back to login</button>              
                        </Form>
                    </div>
                </div>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    creatingUserInfo: (info) => {dispatch(creatingUser(info))}
  });

export default connect(
    null,
    mapDispatchToProps
)(CreateUser);