import React, { Component } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

class Tab extends Component {
  render() {
    return (
      <ToggleButtonGroup
        type="radio"
        name="time"
        defaultValue={this.props.time}
        onChange={selected => {
          this.props.onTimeChange(selected);
        }}
      >
        <ToggleButton value="MIN_1">1 Minute</ToggleButton>
        <ToggleButton value="MIN_5">5 Minutes</ToggleButton>
        <ToggleButton value="HOUR_1">1 Hour</ToggleButton>
        <ToggleButton value="WEEK_1">1 Week</ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default Tab;
