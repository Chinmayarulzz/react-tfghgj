import React from 'react';
export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            authenticated : true
        }
    }
    render(){
        return(
            <div className = "card">
                <div className = "card-title">Name : {this.props.employee.name}</div>
                <div className = "card-body">
                    <p>
                        <span>ID : {this.props.employee.id}</span><br/>
                        <span>Age : {this.props.employee.age}</span><br/>
                        <span>Salary : {this.props.employee.salary}</span><br/>
                    </p>
                </div>
                <button onClick = {this.setState({authenticated:false})}>Edit</button>
            </div>
        );
    }
}