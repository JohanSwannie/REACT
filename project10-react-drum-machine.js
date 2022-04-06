import React from 'react';
import ReactDOM from 'react-dom';
import './drum-machine.css';

const drumSaver = [
  {
    keyCipher: 81,
    keyGenerator: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCipher: 87,
    keyGenerator: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCipher: 69,
    keyGenerator: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCipher: 65,
    keyGenerator: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCipher: 83,
    keyGenerator: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCipher: 68,
    keyGenerator: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCipher: 90,
    keyGenerator: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCipher: 88,
    keyGenerator: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCipher: 67,
    keyGenerator: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const drumSaver2 = [
  {
    keyCipher: 81,
    keyGenerator: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCipher: 87,
    keyGenerator: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCipher: 69,
    keyGenerator: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCipher: 65,
    keyGenerator: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCipher: 83,
    keyGenerator: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCipher: 68,
    keyGenerator: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCipher: 90,
    keyGenerator: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCipher: 88,
    keyGenerator: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCipher: 67,
    keyGenerator: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

class DrumSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      performMusic: false,
      content: ""
    };
    this.performSound = this.performSound.bind(this);
  }
  performSound(event) {
    this.setState({
      performMusic: !this.state.performMusic,
      content: [event]
    });
    this[event].play();
    this[event].currentTime = 0;
    var check = document.querySelector("#display");
    check.innerHTML = [event];
  }
  render() {
    return (
      <div
        className={this.props.className}
        id={this.props.id}
        style={this.state.style}
        onClick={() => this.performSound(this.props.id)}
      >
        {this.props.keyGenerator}

        <audio
          ref={(ref) => (this[this.props.id] = ref)}
          src={this.props.url}
          className="clip"
          id={this.props.keyGenerator}
         ></audio>
      </div>
    );
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundSet: drumSaver,
      content: "Sound"
    };
    this.replaceSoundSet = this.replaceSoundSet.bind(this);
    this.KeyPressedPlayMusic = this.KeyPressedPlayMusic.bind(this);
  }
  replaceSoundSet() {
    if (this.state.soundSet === drumSaver) {
      this.setState({
        soundSet: drumSaver2
      });
    } else {
      this.setState({
        soundSet: drumSaver
      });
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.KeyPressedPlayMusic);
  }

  KeyPressedPlayMusic(event) {
    var soundAudios = document.querySelectorAll("audio");
    for (let i = 0; i < this.state.soundSet.length; i++) {
      if (
        event.keyCipher === this.state.soundSet[i].keyCipher ||
        event.keyCipher === this.state.soundSet[i].keyGenerator.toLowerCase().charCodeAt()
      ) {
        var drumKit2 = document.querySelectorAll(".drum-pad");
        var sound = soundAudios[i];
        sound.play();
        this.setState({ content: this.state.soundSet[i].id });
        sound.currentTime = 0;
      }
    }
  }
  render() {
    var drumKit3 = this.state.soundSet.map((event) => {
      return (
        <DrumSelector
          keyGenerator={event.keyGenerator}
          id={event.id}
          url={event.url}
          className="drum-pad"
        />
      );
    });
    return (
      <div className="container">
        <div>
          <h1>DRUM MACHINE
          </h1>
        </div>
        <div id="drum-machine">{drumKit3}</div>
        <div className="restElements">
          <label className="frame">
            <div className="switch">
              <input
                className="switchMode"
                type="checkbox"
                name="check"
                value="check"
                onClick={this.replaceSoundSet}
              />
              <div className="signal"></div>
            </div>
            Change Music Sound Set
          </label>
          <div id="display">{this.state.content}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById("root"));
