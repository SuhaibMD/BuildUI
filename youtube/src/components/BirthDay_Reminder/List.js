import React from 'react';
import {Data} from './Data'
const List = () => {
    return (
        <>
            <h2>list component</h2>
            {Data.map((data) => <li>{data.name}</li>)}
        </>
    );
};

export default List;