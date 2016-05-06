// -*- coding: utf-8 -*-

import React from 'react';

let PovPixel = (props) => {
  const maxFrame = props.frames.length;
  const n = props.frame % (2 * maxFrame);
  const color = (n < maxFrame) ? props.frames[n] : '';
  const style = {
    backgroundColor: (color || 'transparent'),
    display: 'flex',
    flex: 'auto'
  };
  return (
    <div style={style}></div>
  );
};
PovPixel.propTypes = {
  frames: React.PropTypes.array.isRequired,
  frame: React.PropTypes.number.isRequired
};

const Pov = React.createClass({
  propTypes: {
    image: React.PropTypes.array.isRequired,
    height: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    interval: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      interval: 30
    };
  },
  getInitialState: function() {
    return {frame: 0};
  },
  componentWillMount: function() {
    this.intervalId = null;
  },
  componentDidMount: function() {
    const interval = this.props.interval;
    this.intervalId = setInterval(this.tick, interval);
  },
  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },
  tick: function() {
    this.setState({ frame: this.state.frame + 1 });
  },
  render: function() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      height: this.props.height,
      width: (this.props.height / this.props.image.length)
    };
    const pixels = this.props.image.map((row, index) => {
      return (
        <PovPixel
           key={index}
           frames={row}
           frame={this.state.frame} />
      );
    });
    return (
      <div className="pov-container" style={style}>{pixels}</div>
    );
  }
});

export default Pov;
