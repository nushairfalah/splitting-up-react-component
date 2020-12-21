import React from 'react';
import { Link } from 'react-router-dom';

const QueryPage = (props) => {
    console.log(props);

    const goback = () => {
        props.history.goBack()
    }

    const query = new URLSearchParams(props.location.search);
    const search = query.get('search')

    return (
        <div>
            <input type="text" name="" id="" value={search} />
            <br />
            <Link to='hash-params'>to Hash Page</Link>
            <br />
            <button onClick={() => goback()} >&lt; Route Page</button>
        </div>
    )
}

export default QueryPage;
