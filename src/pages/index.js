import React from 'react';
import './index.css';
import backgroundImg from '../files/img/image1.png';
import deerGif from '../files/img/GIFcopy.gif';
import flowerImg from '../files/img/IMG_0842.png';

export const Home = () => {
  return (
    <body>
        <div style={{
            backgroundImage: 'url('+backgroundImg+')',
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
            color: "#f5f5f5",
            display: 'flex',
            flexDirection: 'column'
            }} >
                <h1 id="title">Ashling</h1>
                <p id="subheading">Explore Your Vision</p>
        </div>
        <div class="catchphrase">
            <h6 id="phrase">Telling stories through Art-Incorporating Products</h6>
        </div>
        <div class="vision">
            <div class="line-container">
                <div class="vision-line" />
                <div class="vision-line" id="thin-vision" />
            </div>
            <div class="vision-description">
                <h2 class="vision-title">VISION</h2>
                <h1 class="vision-phrase">
                    The Intersection Between Functionality and Expression
                </h1>
                <p class="paragraph">
                On one level, much of what we buy is functional. Yet, at the same time, our choices 
                – in deliberately selecting one product over another – reflect aspects of ourselves. 
                Art is no different. The art we buy is as much about who we are as it is about the artists who create it. 
                </p>
            </div>
            <div class="vision-gif">
                <img id="img-gif" src={deerGif} alt="gif" />
            </div>
        </div>
        <div class="products">
            <div class="products-line" />
            <div class="products-line" id="thin" />
            <div class="product-description">
                <h2 class="vision-title">PRODUCTS</h2>
                <p class="paragraph">We sell products that tell stories. Ashling works with a selected portfolio of artists to create
                products that incorporate unique, creative, and visually appealing designs. We offer stickers, art prints, t-shirts, pins, 
                and more</p>
            </div>
            
        </div>
        <div class="values">
            <div class="product-description" id="value-description">
                <h2 class="vision-title">VISION</h2>
                <h1 class="vision-phrase" id="value-phrase">Creativity</h1>
                <p class="paragraph" id="value-italic">Creativity: "the use of the imagination or original ideas, 
                especially in the production of an artistic work."</p>
                <p class="paragraph">We look for art that is unique and has value beyond a representation of what 
                already exists. Art can have impressionistic possibilities colored by perspective, or it can be entirely 
                abstract. Art isn’t constrained to portray what things actually look like; artists can interpret scenes, 
                emotions, or feelings as they desire to create something distinct. In the artists we represent, we look 
                for art that encapsulates this spirit of exploration and creation.</p>
            </div>
            <div class="value-img">
                <img id="img-value" src={flowerImg} alt="img" />
            </div>
        </div>
    </body>
  )
}

export default Home;