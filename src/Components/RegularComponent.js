/**
 * TODO: Please create a class component named `RegularComponent, that have a props called `name`
 * and render a <div> with text `Regular component {props.name}`
 * (don't forget to export it)
 */

import React from 'react';

// const RegularComponent = (props) => {
//     return (
//         <div>
//             <p>Regular component {props.name}</p>
//         </div>
//     )
// }

class RegularComponent extends React.PureComponent {

    heavyText() {
        for (let i = 0; i < 800000000; i++) {
            //
        }
        return "Heavy text";
    }

    render() {
        return (
            <div>
                <p>Regular component {this.props.name} {this.heavyText()}</p>
            </div>
        );
    }
}

export default RegularComponent;
