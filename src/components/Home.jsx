import '../App.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group'


const motorcyclePicture = new URL('../images/SF-19.jpg', import.meta.url);
const motorcyclePicture1 = new URL('../images/SF-10.jpg', import.meta.url);

class Home extends Component {

    state = {
        backgroundImage: motorcyclePicture,
        count: 2
    };

    changeBackgroundImage = (image) => {
        this.setState({ backgroundImage: image });
    }

    getClassName() {
        return this.state.backgroundImage === motorcyclePicture ? 'firstname-home top-left' : 'firstname-black top-left';
    }

    getClassLastName() {
        return this.state.backgroundImage === motorcyclePicture ? 'lastname' : 'lastname-black';
    }

render() {


  return ( 
    <div>
        
        <img class='image' id='backgroundPic' src={this.state.backgroundImage}></img>
        <div class={this.getClassName()}>Grant<br/><span class={this.getClassLastName()}>Fricano</span></div>
        <div class='bottom-left'>
            <div>
                <button class='btn btn-primary button-details' onClick={() => this.changeBackgroundImage(motorcyclePicture1)}>About</button>
                <button class='btn btn-primary button-details' onClick={() => this.changeBackgroundImage(motorcyclePicture)}>Projects</button>
            </div>
            <div>
                <button class='btn btn-primary button-details'>Contact</button>
                <button class='btn btn-primary button-details'>Edit</button>
            </div>
        </div>
    </div>
  );
}
}

export default Home;
