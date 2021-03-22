import React, { Component } from "react";
import "./ForwardBackOverlayChild.css";
import forward from "../../assets/ico_player_30sforward.png";
import backWard from "../../assets/ico_player_30sback.png";

class ForwardBackOverlayChild extends Component {
  constructor(props) {
    super(props);
    this.videoObject = this.props.playerObject;
  }

  videoForwardClickHandler = () => {
    this.videoObject.currentTime(this.videoObject.currentTime() + 30);
  };
  videoBackwardClickHandler = () => {
    this.videoObject.currentTime(this.videoObject.currentTime() - 30);
  };
  render() {
    return (
      <div className="hello">
        <img
          src={backWard}
          alt=""
          className="back-30s"
          onClick={this.videoBackwardClickHandler}
        />
        <img
          src={forward}
          alt=""
          className="forward-30s"
          onClick={this.videoForwardClickHandler}
        />
      </div>
    );
  }
}

export default ForwardBackOverlayChild;
