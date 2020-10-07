import React from 'react'
import ReactDOM from 'react-dom'

import BT from './Components/Buttons'
import Input, { CreateInput } from './Components/Input'
import Display from './Components/Display'
import "./App.css";

export default function App(){
    return(
        <div >
            <center>
            <h1 class='HEAD' id='Rollno'>
                Hammad Riaz (SP18-BCS-127)
            </h1>
            </center>
            <center>
            <h3 class='HEAD' id='Assign'>
                Assignment 1 Web Technologies
            </h3>
            </center>
            <div id='Insertion'>
                <h2>Add / Update Person's Data</h2>
                <Input />
                <BT />
            </div>
            <div id='Display'>
                <h2>List of Persons</h2>
                <Display/>
            </div>  
        </div>
        )
}