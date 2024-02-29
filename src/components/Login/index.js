import React, { Component } from 'react';
import {Form } from "react-bootstrap"
import './index.css';
import { Redirect } from 'react-router-dom';

export class Login extends Component {

    state = {
        username: 'rahul',
        password: 'rahul@2021'
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }
    
    onLogin = async () => {

        let userDetails = {
            username: this.state.username,
            password: this.state.password
        }

        const url = 'https://apis.ccbp.in/login'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const result = await response.json()
        if (response.ok) {
            const { history } = this.props
            window.sessionStorage.setItem("token", result.jwt_token);
            history.replace("/")
        }
    }
    
    render() {
        
        console.log("state", this.state)
        const {username, password} = this.state

        let token = sessionStorage.getItem("token")
        console.log("🚀 ~ Login ~ render ~ token:", token)
        if (token) {
            return <Redirect to="/" />
        }

        return (
            <div className='login-container'>
                {/* Form Section */}
                <div className='login-form-container'>
                    <div className='login-form-inner-container'>
                        {/* <img src="public\images\kitchen-logo.png" />  */}

                        <h1 className='app-header'>Randi Kummedaam </h1>
                        <h1 className='login-text'>LOGIN</h1>

                        <>
                            <h1 className='login-labels'>USERNAME</h1>
                            <Form.Control onChange={this.handleChange} value={username} name="username" type='text' className='login-input-field' />
                        </>
                        <>
                            <h1 className='login-labels'>PASSWORD</h1>
                            <Form.Control onChange={this.handleChange} value={password} name="password" type='password' className='login-input-field' />
                        </>

                        <button className='btn btn-warning login-button' onClick={this.onLogin}>Login</button>
                    </div>
                </div>


                {/* Image Section */}
                <div className='login-img-container'></div>
            </div>
        )
    }
}

export default Login