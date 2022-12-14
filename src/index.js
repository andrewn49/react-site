import Jquery from 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Movingradio(props) {
    return (
        <div className="radioclicky">
            <input type="radio" id={props.id} value={props.value}></input>
            <label htmlFor="noradio">{props.text}</label>
        </div>
    );
}

function Radio(props) {
    return (
        <div className="radioclicky">
            <input type="radio" id={props.id} value={props.value}></input>
            <label htmlFor="noradio">{props.text}</label>
        </div>
    );
}

function Annoyingform(props) {
    return (<div className="formpos"><div className="rainbow-border" id="annoyingarea"><form>
        <br />
        <label htmlFor="firstname" className="textlabel">First Name</label>
        <input type="text" id="firstname" />
        <br /> <br />
        <label htmlFor="lastname" className="textlabel">Last Name</label>
        <input type="text" id="lastname" />
        <br /> <br />
        <p>IS POKEMON GOOD</p>
        <Movingradio id="yesradio" text="Yes" value="yes" onClick={()=>move(this)}/>
        <Radio id="noradio" text="No" value="no"/>
        <input type="submit" value="Submit" /></form></div></div>)
}

function Spinningimage(props) {
    return (<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/583.png" className="rotate-image"></img>);
}

function Rainbowtext(props) {
    return (<h3 className="rainbow-text"><b>{props.text}</b></h3>)
}

function Rainbowbar() {
    return (<hr className="rainbow-hr"></hr>)
}

function Headimage(props) {
    return (<div className="headimage"></div>)
}

function Headtext(props) {
    return (
        <div className="headtext rainbow-text"><b>{props.value}</b></div>
    )
}

function Navbutton(props) {
    return (<button className="bounce"><b>{props.text}</b></button>)
}

function Navbar() {
    return (
        <div className="navbar">
            <Navbutton text='PAGE 1' />
            <Navbutton text='PAGE 2' />
            <Navbutton text='PAGE 3' />
            <Navbutton text='PAGE 4' />
            <Navbutton text='PAGE 5' />
        </div>
    )
}

function Page() {
    return (
        <div className="page">
            <Headimage />
            <Headtext value="LUKAS IS WRONG AND HAS A BAD OPINION" />
            <Navbar />
            <Rainbowbar />
            <Rainbowtext text="LUKAS HAS A BAD OPINION. THAT'S THE WHOLE CONTENT OF THE PAGE. POKEMON HASN'T BEEN GOOD IN YEARS. LIKE HONESTLY WHAT IS THIS THING!?!?!?!?!?!?!?!?" />
            <Spinningimage />
            <Annoyingform />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />)



// function generate(size) {
//     var random = ((Math.random() * size) / 2.5);
//     console.log(random);
//     random *= Math.round(Math.random()) ? 1 : -1;
//     return random;
// }

// function move(a) {
//     var width = document.getElementById("annoyingarea").width();
//     var height = document.getElementById("annoyingarea").height();

//     width = width - (width * 0.04);
//     height = height - (height * 0.1);

//     var newPos = new function () {
//         this.left;
//         this.top;
//     };

//     newPos.left = generate(width);
//     newPos.top = generate(height);
//     a.animate({
//         "top": newPos.top + "px",
//         "left": newPos.left + "px"
//     }, 500);
// }