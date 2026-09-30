// * Difference between Functional Component with JSX and without JSX

import React from "react";

// * React Function Component with JSX
// const Hello = () => {
//     return (
//         <div className="qwert">
//             <h1>Hello Joshua !!!</h1>
//         </div>
//     )
// }

// * React Function Component without JSX
const Hello = () => {
	return React.createElement(
			'div', 
			null, 
			React.createElement('h1', null, 'Hello World !!!')
	)
}

export default Hello