import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./Cards.css"

export default function Cards(props) {
    return (
    <>
     <div className="container">

            <h1>Projects and Utils</h1>

         <div id="cardsgroup" class="card-group my-2">


            <div id="cards1" class={`card  mx-2 my-2 card-${props.elementmode} bg-${props.elementmode} `}>
            <img src="https://github.com/SushantPhalke/textutilsapp/blob/main/textutils.jpeg?raw=true" class="card-img-top" alt="..."/>
            <div id='cardbody' class="card-body">
                <h5 class="card-title">TextEditor</h5>
                <hr></hr>
                <p class="card-text"><code>Accepts text input from user and gives functionalities like changing case, reading time, 
            No. of words and characters and copy refactor etc.</code></p>
            </div>
            <div  id='cardfooter' class="card-footer">
            <Link className="nav-link" to="/TextEditor"><button type="button" className="btn btn-primary " >Open TextEditor</button></Link>
            </div>
            </div>


            <div  id="cards2" class={`card  mx-2 my-2 card-${props.elementmode} bg-${props.elementmode} `}>
            <img src="https://github.com/SushantPhalke/textutilsapp/blob/main/asteriskeducation3.jpeg?raw=true" class="card-img-top" alt="..."/>
            <div id='cardbody' class="card-body">
                <h5 class="card-title">Tutorial Website</h5>
                <hr></hr>
                <p class="card-text"><code>Educational website where i can share knowledge about programming and guide juniors throught their journy.*free Educational blogs*</code></p>
            </div>
            <div id='cardfooter' class="card-footer">
            <a href="https://asteriskeducation.blogspot.com/"><button type="button" className="btn btn-primary" >Open Edu. Website</button></a>
            </div>
            </div>



            <div  id="cards3" class={`card  mx-2 my-2 card-${props.elementmode} bg-${props.elementmode} `}>
            <img src="https://github.com/SushantPhalke/textutilsapp/blob/main/pic-withTR2021.jpeg?raw=true" class="card-img-top" alt="..."/>
            <div id='cardbody' class="card-body">
                <h5 class="card-title">TR Robot and Website</h5>
                <hr></hr>
                <p class="card-text"><code>This robot is made for ABU Robocon 2021 theme solution. Robot able to pick, load, and 
            throw five Arrows at time and Redesigned https://rrlgcoeara.in website </code></p>
            </div>
            <div id='cardfooter' class="card-footer" >
            <div class="btn-group" role="group" aria-label="Basic example">
            <a href="https://drive.google.com/drive/u/2/folders/1fBxEq-rjXM8QSL80Xttzjnp3dRJGGIl2"><button type="button" class="btn btn-primary">Robot</button></a>
            <a href="https://rrlgcoeara.in/"><button type="button" class="btn btn-primary">Website</button></a>
            
            </div>
            </div>
            </div>


         </div>

     </div>

     </> 
    )
}
