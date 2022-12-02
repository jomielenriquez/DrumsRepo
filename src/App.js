import "./styles.css";
import BackGroundMusic from "./WhoWantsToBe/BackGroundMusic.mp3"
import Win1000 from "./WhoWantsToBe/$1,000 Win.mp3"
import FinalAns from "./WhoWantsToBe/FinalAns.mp3"
import LetsPlay from "./WhoWantsToBe/LetsPlay.mp3"
import Lose from "./WhoWantsToBe/Lose.mp3"
import Phone from "./WhoWantsToBe/PhoneAFriend.mp3"
import Supense from  "./WhoWantsToBe/Suspense.mp3"
import Win from "./WhoWantsToBe/Win.mp3"
import Yey from "./WhoWantsToBe/Yey.mp3"
import React, { Component } from "react";
const Themes ={
  default:{
    taudio:[
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    ],
    ttext:[
      "Chord 1",
      "Chord 2",
      "Chord 3",
      "Shaker",
      "Open HH",
      "Closed HH",
      "Punchy Kick",
      "Side Stick",
      "Snare",
      "Pause"
    ],
    ticon:[
      "fa fa-light fa-guitar",
      "fa fa-light fa-guitar",
      "fa fa-light fa-guitar",
      "fa fa-solid fa-cubes-stacked",
      "fa fa-light fa-hands",
      "fa fa-solid fa-hands",
      "fa fa-solid fa-shoe-prints",
      "fa fa-solid fa-drum",
      "fa fa-solid fa-drum-steelpan",
      "fa fa-solid fa-pause"
    ]
  },
  WhoWants:{
    taudio:[
      Win1000,
      BackGroundMusic,
      FinalAns,
      LetsPlay,
      Lose,
      Phone,
      Supense,
      Win,
      Yey
    ],
    ttext:[
      "WIN",
      "Background",
      "Final",
      "Let's Play",
      "Lose",
      "Phone",
      "Suspense",
      "WIN",
      "Yey Kids",
      "Pause"
    ],
    ticon:[
      "fa fa-solid fa-trophy",//<FontAwesomeIcon icon="fa-solid fa-volume-off" />
      "fa fa-solid fa-volume-high",
      "fa fa-solid fa-volume-off",
      "fa fa-solid fa-play",
      "fa fa-solid fa-heart-crack",
      "fa fa-solid fa-phone-volume",
      "fa fa-solid fa-triangle-exclamation",
      "fa fa-solid fa-flag-checkered",
      "fa fa-solid fa-child-reaching",
      "fa fa-solid fa-pause"
    ]
  },
  Themes:["default","WhoWants"]

};
function setBtnActive(id){
  document.getElementById(id).classList.add("btnActive");
  setTimeout(function(){
    document.getElementById(id).classList.remove("btnActive");
  },500);
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "",
      keyPressed: "",
      keyList: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C", "P"],
      theme: "default"
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  componentDidMount() {
    const setKey = (event) => {
      this.setState({ keyPressed: event.key.toUpperCase() });
    };
    document.addEventListener("keydown", setKey);
  }

  componentDidUpdate() {
    if (this.state.keyList.includes(this.state.keyPressed)) {
      this.handleClick("keydown", this.state.keyPressed);
    }
  }

  handleClick(event) {
    var btnClicked = event.target;
    if (arguments[0] === "keydown") {
      var audio = document.getElementById(arguments[1]);
      setBtnActive("btn_" + arguments[1]);
    } else {
      this.setState({ keyPressed: "" });
      if(btnClicked.value==undefined) btnClicked = event.target.parentElement;

      const { name, value } = btnClicked;
      this.setState({
        displayValue: value
      });
      var audio = document.getElementById(name);
    }
    try{
      audio.volume = document.getElementById("mixerVolume").value/100;
      audio.paused ? audio.play() : (audio.currentTime = 0);
    }
    catch(e){}

    try{
      if(arguments[1]=="P" || btnClicked.value=="9"){
        const elements = document.querySelectorAll('audio');
  
        elements.forEach( el => {
          el.pause();
          el.currentTime = 0;
        });
      }
    }
    catch(e){}

    var div = document.getElementById('display');
    try{
      var KeyId = "pad-" + arguments[1].toLowerCase();
      var div1 = document.getElementById(KeyId);
      var Btn_Pressed = div1.getElementsByTagName("button")[0];
      var div = document.getElementById('display');
      div.innerHTML = Themes[this.state.theme].ttext[parseInt(Btn_Pressed.value)];
    }
    catch(e){
      div.innerHTML = Themes[this.state.theme].ttext[btnClicked.value];
    }
    
  }
  changeTheme(){
    this.setState({
      theme: document.getElementById("Theme_select").value
    });
  }
  changeVolume(){
    const elements = document.querySelectorAll('audio');

    elements.forEach( el => {
      el.volume = document.getElementById("mixerVolume").value/100;
    });
  }

  render() {
    
    const const_Themes = Themes.Themes.map(function(item,i){return <option value={item}>{item}</option>});

    return (
      <div id="drum-machine">
        <div id="display" className="display">Default Theme</div>

        <div id="select" className="divs">
          <select name="Theme" id="Theme_select" className="select_theme" onChange={this.changeTheme}>
            {const_Themes}
          </select>
        </div>
        <div id="div_volume" className="divs">
          <input type="range" min="0" max="100" className="Volume" id="mixerVolume" onChange={this.changeVolume}></input>
        </div>

        <div className="buttons table">
          <div className="row">
            <div className="drum-pad cell" id="pad-q">
              
              <button
                id={"btn_" + this.state.keyList[0]}
                type="button"
                name={this.state.keyList[0]}
                value="0"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[0]}></i> <br/> (Q)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[0]}
                src={Themes[this.state.theme].taudio[0]}
              />
            </div>

            <div className="drum-pad cell" id="pad-w">
              
              <button
                id={"btn_" + this.state.keyList[1]}
                type="button"
                name={this.state.keyList[1]}
                value="1"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[1]}></i> <br/> (W)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[1]}
                src={Themes[this.state.theme].taudio[1]}
              />
            </div>

            <div className="drum-pad cell" id="pad-e">
              
              <button
                id={"btn_" + this.state.keyList[2]}
                type="button"
                name={this.state.keyList[2]}
                value="2"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[2]}></i> <br/> (E)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[2]}
                src={Themes[this.state.theme].taudio[2]}
              />
            </div>
          </div>

          <div className="row">
            <div className="drum-pad cell" id="pad-a">
              
              <button
                id={"btn_" + this.state.keyList[3]}
                type="button"
                name={this.state.keyList[3]}
                value="3"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[3]}></i> <br/> (A)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[3]}
                src={Themes[this.state.theme].taudio[3]}
              />
            </div>

            <div className="drum-pad cell" id="pad-s">
              
              <button
                id={"btn_" + this.state.keyList[4]}
                type="button"
                name={this.state.keyList[4]}
                value="4"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[4]}></i> <br/> (S)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[4]}
                src={Themes[this.state.theme].taudio[4]}
              />
            </div>

            <div className="drum-pad cell" id="pad-d">
              
              <button
                id={"btn_" + this.state.keyList[5]}
                type="button"
                name={this.state.keyList[5]}
                value="5"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[5]}></i> <br/> (D)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[5]}
                src={Themes[this.state.theme].taudio[5]}
              />
            </div>
          </div>

          <div className="row">
            <div className="drum-pad cell" id="pad-z">
              
              <button
                id={"btn_" + this.state.keyList[6]}
                type="button"
                name={this.state.keyList[6]}
                value="6"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[6]}></i> <br/> (Z)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[6]}
                src={Themes[this.state.theme].taudio[6]}
              />
            </div>

            <div className="drum-pad cell" id="pad-x">
              
              <button
                id={"btn_" + this.state.keyList[7]}
                type="button"
                name={this.state.keyList[7]}
                value="7"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[7]}></i> <br/> (X)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[7]}
                src={Themes[this.state.theme].taudio[7]}
              />
            </div>

            <div className="drum-pad cell" id="pad-c">
              
              <button
                id={"btn_" + this.state.keyList[8]}
                type="button"
                name={this.state.keyList[8]}
                value="8"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[8]}></i> <br/> (C)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[8]}
                src={Themes[this.state.theme].taudio[8]}
              />
            </div>
          </div>
          <div className="row">
            
            <div className="drum-pad cell pause" id="pad-p">
              <button
                id={"btn_" + this.state.keyList[9]}
                type="button"
                name={this.state.keyList[9]}
                value="9"
                onClick={this.handleClick}
              >
                <i className={Themes[this.state.theme].ticon[9]}></i> <br/> (P)
              </button>
              <audio
                className="clip"
                id={this.state.keyList[9]}
                src={Themes[this.state.theme].taudio[0]}
              />
            </div>
          </div>
        </div>
        <div className="Creator">
          Created By Jomiel Enriquez
        </div>
      </div>
    );
  }
}
