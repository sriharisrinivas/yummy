import React, { Component } from 'react'

export class Home extends Component {
    click = () => {
        sessionStorage.removeItem("token")
        const {history} = this.props;
        history.replace("/login")
    }
    render() {
        return (
            <div onClick={this.click}>Home</div>
        )
    }
}

export default Home