import React from "react";
class UserClass extends React.Component {
  constructor(props) {
   
    super(props);
    console.log(props.name +" Child Constructor");
    this.state = {
      userInfo:{
      name:"Dummy",
      location: "Default",
      avatar:"https://avatars.githubusercontent.com/u/9919?s=280&v=4",
      }
    };
  }

    async componentDidMount() {
     // making an API call and getting the data and then updating the state
          const data = await fetch("  https://api.github.com/users/amanagrawal");
          const json = await data.json();
          console.log(json);
          this.setState({     
            userInfo:json
          
        }); 
      }
    componentDidUpdate(){
      console.log(this.props.name +" Child componentDidUpdate");
    }

    componentWillUnmount(){
      console.log(this.props.name +" Child componentWillUnmount");
    }
    
  render() {
    console.log(this.props.name +" Child Render");
    const {name,location,avatar}= this.state.userInfo;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1, count2:this.state.count2 + 1 });
          }}
        >
          Increase Count
        </button>
        {this.state.count}
        {this.state.count2}
        <h1>Name: {name}</h1>
        <h2>Title: {this.state.userInfo.title}</h2>
        <h3>Contact: {this.props.contact}</h3>
        <h3>Location: {location}</h3>
        <h4>Avatar:{avatar}</h4>
      </div>
    );
  }
}

export default UserClass;
