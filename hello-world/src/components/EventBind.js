import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        // 3. Method 3: Binding in the constructor
        this.handleClick = this.handleClick.bind(this)
    }
    // handleClick(){
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

    
    // 4. Method 4: Class property as
    // arrow function
    handleClick = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* 1. Method 1: Binding in the render method
                can cause a performance issue on large applications */}
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}

        {/* 2. Method 2: Arrow function in render method */}
        {/* <button onClick={() => this.handleClick()}>Click</button> */}
        
        {/* 3. Method 3: Binding in the constructor */}
        {/* <button onClick={this.handleClick}>Click</button> */}
        
        {/* 4. Method 4: Class property as arrow function */}
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default EventBind