import React from 'react';

class UserClass extends React.Component{
    render(){   
        return(
            <div className='user-card'>
                <h1>Aman Agrawal</h1>
                <h2>Software Engineer</h2>
                <h3>Contact: aman.agrawal@example.com</h3>     
                <h3>Location: Pune, India</h3>       
            </div>
        )
    }
}

export default UserClass;