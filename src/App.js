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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: "",
      keyPressed: "",
      keyList: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]
    };
    this.handleClick = this.handleClick.bind(this);
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
    if (arguments[0] === "keydown") {
      var audio = document.getElementById(arguments[1]);
    } else {
      const { name, value } = event.target;
      this.setState({
        displayValue: value
      });
      var audio = document.getElementById(name);
    }
    audio.paused ? audio.play() : (audio.currentTime = 0);
  }

  render() {
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

    const WhoWantsToBeList = [
      Win1000,
      BackGroundMusic,
      FinalAns,
      LetsPlay,
      Lose,
      Phone,
      Suspense,
      Win,
      Yey
    ]

    const audioOut = WhoWantsToBeList;

    return (
      <div id="drum-machine">
        <div id="display">{this.state.displayValue}</div>

        <div className="drum-pad" id="pad-q">
          <button
            type="button"
            name={this.state.keyList[0]}
            value="Chord 1"
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
            value="Chord 2"
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
            value="Chord 3"
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
            value="Shaker"
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
            value="Open HH"
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
            value="Closed HH"
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
            value="Punchy Kick"
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
            value="Side Stick"
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
            value="Snare"
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
      </div>
    );
  }
}
