import React from "react";
class UserClass extends React.Component {
  constructor(props) {
   
    super(props);
    console.log(props.name +" Child Constructor");
    this.state = {
      count: 0,
      count2: 0,
    };
  }

    componentDidMount() {
      console.log(this.props.name +" Child componentDidMount");
    }
    
  render() {
    console.log(this.props.name +" Child Render");
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
        <h1>Name: {this.props.name}</h1>
        <h2>Title: {this.props.title}</h2>
        <h3>Contact: {this.props.contact}</h3>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
