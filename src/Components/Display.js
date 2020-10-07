import React, { Component } from "react";
import ReactDOM from 'react-dom'

// export default function Display2(){
//     return(
//         <div class='flex-container'>
//             <div>{document.getElementById('Name').value}</div>
//             <div>{document.getElementById('Gender').value}</div>
//             <div>{document.getElementById('Age').value}</div>
//             <div>{document.getElementById('City').value}</div>
//         </div>
//     )
// }

export default function Display() {
        return(
            <div>
                <table id='tableHEAD'>
                <thead>
                        <tr id='TableH'>
                            <td >Name<hr/></td>
                            <td >Gender<hr/></td>
                            <td >Age<hr/></td>
                            <td >City<hr/></td>
                            <td >Action<hr/></td>
                        </tr>
                        
                    </thead>
                    <tbody id='TableBody'>
                    </tbody>
                </table>
            </div>
    );
}   
