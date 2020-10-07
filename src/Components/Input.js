import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { GetName } from "./Buttons";

class CreateInput extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    // componentDidMount(){
    //     const Name=document.getElementById('Name').value
    //     console.log({Name})
    // }
    render() {
        if((this.props.id == 'Name'))
        {  
            return( 
            <div class='InputField'>
                <label class='Labels' for={this.props.name}>{this.props.name} :</label>
                <input class='fields' type='text' id={this.props.id} name={this.props.name}></input>
            </div>);
        }
        if((this.props.id== 'Gender'))
        {  
            return( 
            <div class='InputField'>
                <label class='Labels' for={this.props.name}> {this.props.name} :</label>
                <input class='Radio' type='radio' id='Male' name={this.props.name} value='Male'/>MALE
                <input class='Radio'type='radio' id='Female' name={this.props.name} value='Female'/>FEMALE
            </div>);
        }
        if((this.props.id == 'Age'))
        {  
            return( 
            <div class='InputField'>
                <label class='Labels' for={this.props.name}>{this.props.name} :</label>
                <input class='fields' type='number' id={this.props.id} name={this.props.name}></input>
            </div>);
        }
        if((this.props.id== 'City'))
        {  
            return( 
            <div class='InputField'>
                <label class='Labels' for={this.props.name}>{this.props.name} : </label>
                <select class='fields' name={this.props.name} id={this.props.id}>
                 <option value="N/A">Choose a City</option>   
                 <option value="Lahore">Lahore</option>
                 <option value="Sahiwal">Sahiwal</option>
                 <option value="Islamabad">Islamabad</option>
                 <option value="Abbotabad">Abbotabad</option>
                </select>
            </div>);
        }
        else{
            return (<h1>ERROR 404</h1>)
        }
    }
    }
// class GETInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             name:null,
//             gender:null,
//             age:null,
//             city:null

//         }
//     }
//     componentDidMount(){
//         this.state.value={}
//     }
//     render(){
        
//     }
// }

class InputFor extends React.Component{
    render(){
    return(
        <div id='InputBlock'>
            <CreateInput id={'Name'} name={'Name'}/>
            <CreateInput id={'Gender'} name={'Gender'}/>
            <CreateInput id={'Age'} name={'Age'}/>
            <CreateInput id={'City'} name={'City'}/>           
        </div>
        );
    }
}

export default function Input(){
    return(<InputFor/>)
}
