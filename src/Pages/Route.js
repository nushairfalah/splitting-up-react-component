import React from 'react';
import { Link } from 'react-router-dom';

const RoutePage = (props) => {
    console.log(props)

    return (
        <div>
            <h2>Route Parameter {props.match.params.name}</h2>
            <Link to='/query-params'>to Query Page</Link>
        </div>
    )
}

export default RoutePage;
