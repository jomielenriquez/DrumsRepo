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
import React, { Suspense } from "react";
var playing = 0;
const defaultAudio = [
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
];

const defaultThemeTag =[
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
]

const WhoWantsToBeList = [
  Win1000,
  BackGroundMusic,
  FinalAns,
  LetsPlay,
  Lose,
  Phone,
  Supense,
  Win,
  Yey
]

const WhoWantsTag = [
  "WIN",
  "Background Music",
  "Final Answer",
  "Let's Play",
  "Lose",
  "Phone a Friend",
  "Suspense",
  "WIN",
  "Yey Kids",
  "Pause"
]

var defaultTag =[]
var audioOut = [];

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
    console.log(event.target)
    if (arguments[0] === "keydown") {
      var audio = document.getElementById(arguments[1]);
    } else {
      this.setState({ keyPressed: "" });
      const { name, value } = event.target;
      this.setState({
        displayValue: value
      });
      var audio = document.getElementById(name);
    }
    audio.volume = document.getElementById("mixerVolume").value/100;
    audio.paused ? audio.play() : (audio.currentTime = 0);

    if(arguments[1]=="P"){
      const elements = document.querySelectorAll('audio');

      elements.forEach( el => {
        el.pause();
        el.currentTime = 0;
      });
    }

    var div = document.getElementById('display');
    try{
      var KeyId = "pad-" + arguments[1].toLowerCase();
      var div1 = document.getElementById(KeyId);
      var Btn_Pressed = div1.getElementsByTagName("button")[0];
      var div = document.getElementById('display');
      div.innerHTML = defaultTag[parseInt(Btn_Pressed.value)];
    }
    catch(e){
      div.innerHTML = event.target.value;
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
    
    if(this.state.theme=="default") {
      defaultTag=defaultThemeTag;
      audioOut=defaultAudio;
    }
    else if(this.state.theme=="WhoWants") {
      audioOut=WhoWantsToBeList;
      defaultTag=WhoWantsTag
    }

    return (
      <div id="drum-machine">
        <div id="display">{defaultTag[playing]}</div>

        <div id="select">
          <select name="Theme" id="Theme_select" onChange={this.changeTheme}>
            <option value="default">Default</option>
            <option value="WhoWants">Who wants to be a millionaire</option>
          </select>
        </div>
        <div>
          <input type="range" min="0" max="100" className="slider" id="mixerVolume" onChange={this.changeVolume}></input>
        </div>

        <div className="drum-pad" id="pad-q">
          <button
            type="button"
            name={this.state.keyList[0]}
            value="0"
            onClick={this.handleClick}
          >
            Q
          </button>
          <audio
            className="clip"
            id={this.state.keyList[0]}
            src={audioOut[0]}
          />
        </div>

        <div className="drum-pad" id="pad-w">
          <button
            type="button"
            name={this.state.keyList[1]}
            value="1"
            onClick={this.handleClick}
          >
            W
          </button>
          <audio
            className="clip"
            id={this.state.keyList[1]}
            src={audioOut[1]}
          />
        </div>

        <div className="drum-pad" id="pad-e">
          <button
            type="button"
            name={this.state.keyList[2]}
            value="2"
            onClick={this.handleClick}
          >
            E
          </button>
          <audio
            className="clip"
            id={this.state.keyList[2]}
            src={audioOut[2]}
          />
        </div>

        <div className="drum-pad" id="pad-a">
          <button
            type="button"
            name={this.state.keyList[3]}
            value="3"
            onClick={this.handleClick}
          >
            A
          </button>
          <audio
            className="clip"
            id={this.state.keyList[3]}
            src={audioOut[3]}
          />
        </div>

        <div className="drum-pad" id="pad-s">
          <button
            type="button"
            name={this.state.keyList[4]}
            value="4"
            onClick={this.handleClick}
          >
            S
          </button>
          <audio
            className="clip"
            id={this.state.keyList[4]}
            src={audioOut[4]}
          />
        </div>

        <div className="drum-pad" id="pad-d">
          <button
            type="button"
            name={this.state.keyList[5]}
            value="5"
            onClick={this.handleClick}
          >
            D
          </button>
          <audio
            className="clip"
            id={this.state.keyList[5]}
            src={audioOut[5]}
          />
        </div>

        <div className="drum-pad" id="pad-z">
          <button
            type="button"
            name={this.state.keyList[6]}
            value="6"
            onClick={this.handleClick}
          >
            Z
          </button>
          <audio
            className="clip"
            id={this.state.keyList[6]}
            src={audioOut[6]}
          />
        </div>

        <div className="drum-pad" id="pad-x">
          <button
            type="button"
            name={this.state.keyList[7]}
            value="7"
            onClick={this.handleClick}
          >
            X
          </button>
          <audio
            className="clip"
            id={this.state.keyList[7]}
            src={audioOut[7]}
          />
        </div>

        <div className="drum-pad" id="pad-c">
          <button
            type="button"
            name={this.state.keyList[8]}
            value="8"
            onClick={this.handleClick}
          >
            C
          </button>
          <audio
            className="clip"
            id={this.state.keyList[8]}
            src={audioOut[8]}
            // src={OpenHH}
          />
        </div>

        <div className="drum-pad" id="pad-p">
          <button
            type="button"
            name={this.state.keyList[9]}
            value="9"
            onClick={this.handleClick}
          >
            P
          </button>
          <audio
            className="clip"
            id={this.state.keyList[9]}
            src={audioOut[8]}
            // src={OpenHH}
          />
        </div>
      </div>
    );
  }
}
