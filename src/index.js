import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Cr() {
    return (
        <div>
            <p>P.S.</p>
            <p>Lukas is also bad at playing Zenyatta. I carried him hard.</p>
            <p>© Andrew™</p>
            <br /> <br />
        </div>);
}

function Movingradio(props) {
    return (
        <div className="radioclicky">
            <input type="radio" id={props.id} value={props.value} name="rating"></input>
            <label htmlFor="noradio">{props.text}</label>
        </div>
    );
}

function Radio(props) {
    return (
        <div className="radioclicky">
            <input type="radio" id={props.id} value={props.value} name="rating"></input>
            <label htmlFor="noradio">{props.text}</label>
        </div>
    );
}

function Annoyingform() {
    return (<div className="formpos"><div className="rainbow-border" id="annoyingarea"><form>
        <br />
        <label htmlFor="firstname" className="textlabel">First Name</label>
        <input type="text" id="firstname" />
        <br /> <br />
        <label htmlFor="lastname" className="textlabel">Last Name</label>
        <input type="text" id="lastname" />
        <br /> <br />
        <p>IS POKEMON GOOD</p>
        <Movingradio id="yesradio" text="Yes" value="yes" />
        <Radio id="noradio" text="No" value="no" />
        <input type="submit" value="Submit" /></form></div></div>)
}

function Testbutton(){
    const [states] = useState({initial: "Press me!", other: "Press again to reset!"});
    const [buttontext, setText] = useState(states.initial);
    const handleClick = () => {
       if(buttontext === states.initial){
        setText(states.other);
       } else{
        setText(states.initial);
       }
    }
    return(
    <button onClick={handleClick}>{buttontext}</button>
    );
}

function Spinningimage() {
    return (<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/583.png" className="rotate-image"></img>);
}

function Rainbowtext(props) {
    return (<h3 className="rainbow-text"><b>{props.text}</b></h3>)
}

function Rainbowbar() {
    return (<hr className="rainbow-hr"></hr>)
}

function Headimage() {
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
            <Testbutton />
            <Annoyingform />
            <br /> <br />
            <Cr />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />)
