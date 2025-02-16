import React, { Component } from 'react'

export class UserGreet extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }
  render() {
    return(
        this.state.isLoggedIn ? <div>Welcome Atharv</div> : <div>Welcome Guest</div>
    )
  }
}

export default UserGreet