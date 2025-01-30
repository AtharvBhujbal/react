import React,{Component} from "react";

// Class Component
export class Welcome extends Component{
    render(){
        // Destructuring props
        const {name} = this.props
        
        return <h1>Welcome {name} from Class components</h1>
    }
}
