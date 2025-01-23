import React from "react";

// Functional Component
export const Greet = (props) => {
    return (
        <div>
        <h1>Hello {props.name}</h1>
        <p>{props.children}</p>
        </div>
    )
}

// It can also be written as:
// export const Greet = () => {
//     return React.createElement('h1',null,'Hello Atharv from without jsx')
// }


// Another way to export
// export default Greet