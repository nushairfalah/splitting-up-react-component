import React from 'react';
import { Link } from 'react-router-dom';

const HashPage = (props) => {
    console.log(props);

    const goback = () => {
        props.history.goBack();
    }

    const list = [];
    for (let index = 0; index < 100; index++) {
        list.push(`Item - ${index}`)
    }

    return (
        <div>
            <ol>
                {list.map((item, index) => <li key={index} id={`item-${index}`}>{item}</li>)}
            </ol>
            <Link to='/route-params/'>to Route Page</Link>
            <br />
            <button onClick={() => goback()}>Back to Query Page</button>
        </div>
    )
}

export default HashPage;
