import React from 'react';
import { useState } from 'react';

const User = (props) =>{
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const {name,title,contact,location} = props;
    return(
        <div className='user-card'>
            {count}
            {count2}
            <h1>Name: {name}</h1>
            <h2>Title: {title}</h2>
            <h3>Contact: {contact}</h3>     
            <h3>Location: {location}</h3>       
        </div>
    )
};

export default User;