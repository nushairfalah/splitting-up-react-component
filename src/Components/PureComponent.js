/**
 * TODO: Please create a class component named `PureComponent, that have a props called `name`
 * and render a <div> with text `Regular component {props.name}`
 * (don't forget to export it)
 */

import React from 'react';

// const PureComponent = (props) => {
//     return (
//         <div>
//             <p>Pure component {props.name}</p>
//         </div>
//     )

// }

class PureComponent extends React.PureComponent {
    render() {
        return (
            <div>
                <p>Pure component {this.props.name}</p>
            </div>
        )
    }
}

export default PureComponent;
