import { Component } from "react";
import React from "react";

export class Message extends Component{
    constructor(){
        super()
        this.state = {
            'message' : 'Welcome Visitor from State'
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.setState({'message':'Thank you for subscribing'})}>Subscribe</button>
                <button onClick={() => this.setState({'message':"Thank you for subscribing"})}>Subscribe</button>
            </div>
        )
    }
}