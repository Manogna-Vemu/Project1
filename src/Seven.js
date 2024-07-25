import React from "react";
class Seven extends React.Component{
    name="ReactJs";
    count=0;
    constructor(){
        super();
        this.state = {
            number : 1
        }
        console.log("Constructor is Called");
    }

    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
    }

    componentDidUpdate(){
        console.log("Incremented")
    }

    componentWillUnmount(){
        console.log("UnMounted");
    }

    funcBtnClick = () => {
        console.log("Button Clicked");
        console.log(this.count+1);
        this.setState({number: this.state.number+1});
    }

    render(){
    return(
        <div>
            <h1>This is Class Component {this.name} {this.count} {this.state.number}</h1>
            <button className="btn btn-primary" onClick={this.funcBtnClick}>Click here</button>
        </div>
    );
}
} 
export default Seven;