import React from 'react'
import './Verticalbutton.css'
const name="suSHANt";
export default function Verticalbuttons(props) {
    return (<>
            <div className="mx-1">

            <div id='buttongroup'className="First group" role="toolbar" aria-label="Toolbar with button groups">
            <div className=" mx-1" role="group" aria-label="First group">
            
            <button type="button" className="btn btn-primary  mx-1 my-1">Upcoming Projects</button>
                <button type="button" className="btn btn-info mx-1 my-1">Upcoming Projects</button>
                
            </div>
           
            <div className="mx-1 my-1" role="group" aria-label="Third group">
               

                
            </div>
            </div>
            <div id='text-group' className="" >
                <p>Hello this is </p><h1><code>{name}</code></h1>
                    <p>
                    live in <code>Dreamspace ...</code>
                    </p>

            </div>
        
            </div>
                </> 
    )
}
