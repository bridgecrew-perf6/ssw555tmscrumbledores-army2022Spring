import React, { Component } from "react";
import "./App.css";

class Musicbtn extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio(this.props.musicData),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="btnplace">
        <button className="PlayBtn" onClick={this.playPause}>
          {this.state.isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default Musicbtn;
