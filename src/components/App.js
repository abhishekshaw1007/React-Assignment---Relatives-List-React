import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {
                   <ol key='relativeList'>
                        <li key='relativeListItem1'>Sweets</li>
                        <li key='relativeListItem2'>Clothes</li>
                        <li key='relativeListItem3'>Crackers</li>
                    </ol>
               }
               
            </div>
        )
    }
}


export default App;
