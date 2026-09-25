import React from "react";

// React Function Component with JSX
// const Hello = () => {
//     return (
//         <div>
//             <h1>Hello Joshua !!!</h1>
//         </div>
//     )
// }

// React Function Component without JSX
const Hello = () => {
    return React.createElement(
        'div', 
        null, 
        React.createElement('h1', null, 'Hello World !!!')
    )
}

export default Hello