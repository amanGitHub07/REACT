import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0,
            count2:0
        }
    }
    render(){   
        return(
            <div className='user-card'>
                {this.state.count}
                {this.state.count2}
                <h1>Name: {this.props.name}</h1>
                <h2>Title: {this.props.title}</h2>
                <h3>Contact: {this.props.contact}</h3>     
                <h3>Location: {this.props.location}</h3>       
            </div>
        )
    }
}

export default UserClass;