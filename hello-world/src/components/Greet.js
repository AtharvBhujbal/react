import React from "react";

// Functional Component
export const Greet = (props) => {
    // Destructuring props
    const {name, children} = props
    return (
        <div>
        <h1>Hello {name}</h1>
        <p>{children}</p>
        </div>
    )
}

// It can also be written as:
// export const Greet = () => {
//     return React.createElement('h1',null,'Hello Atharv from without jsx')
// }


// Another way to export
// export default Greet