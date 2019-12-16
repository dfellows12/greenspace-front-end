import React, { Component } from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'
import { loggingUser } from "../redux/actions"


class Login extends Component {

    state = {
        name: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        let info = {name: this.state.name, password: this.state.password}
        return this.props.loggingUserInfo(info);
      };

    render() {
        return (
                <div className="login">
                    <div className="loginform">
                        <h2>Create your own</h2>
                        <h1>GreenSpace</h1>
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
                            <Button type='submit'>Submit</Button>
                            <Link to="/users/create"><button className="ui black inverted basic button">Not Registered?</button></Link>                       </Form>
                    </div>
                </div>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    loggingUserInfo: (info) => {dispatch(loggingUser(info))}
  });

export default connect(null, mapDispatchToProps)(Login);