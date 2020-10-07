
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Display from "./Display";

var savedIndex;

//Add Data
function AddData(){
    var newRow=document.createElement('tr');
    newRow.className='ROWS';
    // var Line1=document.createElement('hr');
    // var Line2=document.createElement('hr');
    // var Line3=document.createElement('hr');
    // var Line4=document.createElement('hr');
    // var Line5=document.createElement('hr');
    var newData1=document.createElement('td');
    var newData2=document.createElement('td');
    var newData3=document.createElement('td');
    var newData4=document.createElement('td');
    var newData5=document.createElement('td');
    var cell1=document.createTextNode(document.getElementById('Name').value);
    
    if(document.getElementById('Male').checked)
    {
        var cell2=document.createTextNode(document.getElementById('Male').value);
    }
    else if(document.getElementById('Female').checked)
    {
        var cell2=document.createTextNode(document.getElementById('Female').value);
    }
    else{
        alert("Gender wasn't selected hence Empty Data will be Entered");
        var cell2=document.createTextNode('N/A');
    }
    if(document.getElementById('Age').value>=15)
    {
        var cell3=document.createTextNode(document.getElementById('Age').value); 
    }
    else{
        alert("Age Should be above 15 hence Empty Data will be Entered")
        var cell3=document.createTextNode('N/A');
    }
    var cell4=document.createTextNode(document.getElementById('City').value);


    var B1=document.createElement('button')
    B1.innerHTML = "Select";
    var B2=document.createElement('button')
    B2.innerHTML = "Remove";
    B1.id='BT1';
    B2.id='BT2';
    B1.onclick=function(){
        var i;
        
        var rows = document.getElementById('tableHEAD').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        for (i = 0; i < rows.length; i++) 
        {
            rows[i].onclick = function() {
                var rIndex;
                console.log(this.rowIndex)
                rIndex = this.rowIndex;
                savedIndex=rIndex;
                document.getElementById("Name").value = this.cells[0].innerHTML;
                if(this.cells[1].innerHTML=='Male')
                {
                    document.getElementById('Male').checked=true;
                }
                if(this.cells[1].innerHTML=='Female')
                {
                    document.getElementById('Female').checked=true;
                }
                document.getElementById("Age").value = this.cells[2].innerHTML;
                document.getElementById("City").value = this.cells[3].innerHTML;
            }
        }
    }
    B2.onclick=function(){
        var table = document.getElementById("tableHEAD");
        table.deleteRow(this.parentNode.parentNode.rowIndex);
    }
    newData1.appendChild(cell1);
    newData2.appendChild(cell2);
    newData3.appendChild(cell3);
    newData4.appendChild(cell4);
    newData5.appendChild(B1);
    newData5.appendChild(B2);

    newRow.appendChild(newData1);
    newRow.appendChild(newData2);
    newRow.appendChild(newData3);
    newRow.appendChild(newData4);
    newRow.appendChild(newData5);
    // newData1.appendChild(Line1);
    // newData2.appendChild(Line2);
    // newData3.appendChild(Line3);
    // newData4.appendChild(Line4);
    // newData5.appendChild(Line5);
   
    document.getElementById('TableBody').appendChild(newRow);
}

//Reset Data
function ResetData(){
    console.log("Data got Deleted");
    console.log(document.getElementById('Name').value)
    if(document.getElementById('Male').checked)
    {
            console.log(document.getElementById('Male').value)
    }
    if(document.getElementById('Female').checked)
    {
            console.log(document.getElementById('Female').value)
    }   
    console.log(document.getElementById('Age').value)
    console.log(document.getElementById('City').value) 
    document.getElementById('Name').value=''
    document.getElementById('City').value='Choose a City'
    document.getElementById('Age').value=''
    document.getElementById('Male').checked=false
    document.getElementById('Female').checked=false 
}

//Update Data
function UpdateData(){

    var name = document.getElementById("Name").value;
    
    if(document.getElementById('Age').value>=15)
    {
        var age = document.getElementById("Age").value;
    }
    else{
        alert("Age Should be above 15 hence Empty Data will be Entered")
        var age ='N/A'
    }
    
    var city = document.getElementById("City").value;
    var table=document.getElementById('tableHEAD');
    var gender;
    if(document.getElementById('Male').checked==true)
    {
        gender='Male'
    }
    if(document.getElementById("Female").checked==true)
    {
        gender='Female'
    }
//table is var that represents table
//savedIndex is saved index when select button was clicked and that index was saved


    table.rows[savedIndex].cells[0].innerHTML = name;
    table.rows[savedIndex].cells[1].innerHTML = gender; 
    table.rows[savedIndex].cells[2].innerHTML = age;
    table.rows[savedIndex].cells[3].innerHTML = city;
}

function CreateButton(props){

    if((props.id=='Add'))
    {
        return <button class='BT_B' type='submit' id={props.id} onClick={AddData}>{props.name}</button>
    }
    if((props.id=='Reset'))
    {
        return <button class='BT_B' type='reset' id={props.id} onClick={ResetData}>{props.name}</button>
    }
    if((props.id=='Update'))
    {
        return <button class='BT_B' id={props.id} onClick={UpdateData}>{props.name} </button>
    }
}

function Baa(){
    return(
        <div>
            <CreateButton id='Add' name='Add'/>
            <CreateButton id='Reset' name='Reset'/>
            <CreateButton id='Update' name='Update'/>
        </div>
        );
}
export default class BT extends React.Component{
    render(){
    return(<Baa/>)
    }
}