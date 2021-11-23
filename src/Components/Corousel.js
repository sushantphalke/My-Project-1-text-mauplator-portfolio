import React from 'react'
import "./Corousel.css"


export default function Carousel(props) {


    return (
      <div className='container'>
        <div id="headingcarousel"><h1>My Achivements</h1></div>
        <div id="Corouselcss">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div id="carouselelements">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <div  className='mx-3 '><img id="firstimage" src="https://github.com/SushantPhalke/textutilsapp/blob/main/python-training-certification.jpeg?raw=true" border="1" alt="images for 1 not available"/></div>
                  <div className=' mx-3 '><img id="secondimage" src="https://github.com/SushantPhalke/textutilsapp/blob/main/c++%20certification.jpeg?raw=true" border="3"  alt="images for 1 not available" /></div>
                  <div className="carousel-caption d-none d-md-block">
                  <h3 ><mark >Python | C++ </mark></h3>
                  <p><mark><code>CS Languages</code></mark></p>
                  </div>
                </div>

                <div className="carousel-item">
                <a href='https://www.linkedin.com/feed/update/urn:li:activity:6841987173751894016'>
                  <div  className='mx-3 '><img id="firstimage" src="https://github.com/SushantPhalke/textutilsapp/blob/main/sushant_phalke_robocon_cert_2021.jpg?raw=true" border="1" alt="images for 1 not available"/></div>
                  <div className=' mx-3 '><img id="secondimage" src='https://github.com/SushantPhalke/textutilsapp/blob/main/news-article1.jpeg?raw=true' border="3"  alt="images for 1 not available" /></div></a>
                  <div className="carousel-caption d-none d-md-block">
                  <h3 ><mark >All India Rank-6</mark></h3>
                    <p><mark><code>In National DD Robocon 2021</code></mark></p>
                  </div>
                 
                </div>
                <div className="carousel-item">
                <a href='https://rrlgcoeara.in/#:~:text=ROBO%20RUGBY%207s,Lokhande%2C%20Akshay%20Darade'>
                <div  className='mx-3 '><img id="firstimage" src="https://github.com/SushantPhalke/textutilsapp/blob/main/2020-CERT.jpeg?raw=true" border="1" alt="images for 1 not available"/></div>
                <div className=' mx-3 '><img id="secondimage" src="https://github.com/SushantPhalke/textutilsapp/blob/main/2020team.jpg?raw=true" border="3"  alt="images for 1 not available" /></div></a>
                <div className="carousel-caption d-none d-md-block">
                  <h3 ><mark >All India Rank 14</mark></h3>
                    <p><mark><code>In National DD Robocon 2020.</code></mark></p>
                  </div>
                </div>
                <div className="carousel-item">
                <div  className='mx-3 '><img id="software-page1" src="https://github.com/SushantPhalke/textutilsapp/blob/main/softwares-page1.jpeg?raw=true" border="1" alt="images for 1 not available"/></div>
                  <div className=' mx-3 '><img id="software-page2" src="https://github.com/SushantPhalke/textutilsapp/blob/main/softwares-page2.jpeg?raw=true" border="3"  alt="images for 1 not available" /></div>
                  <div className="carousel-caption d-none d-md-block">
                  <h3 ><mark >Skilled In</mark></h3>
                  <p><mark><code>These Technologies</code></mark></p>
                  </div>  
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
       </div>
      </div>
    )
}
