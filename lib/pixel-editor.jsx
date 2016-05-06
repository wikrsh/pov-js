// -*- coding: utf-8 -*-

import React from 'react';

let Pixel = (props) => {
  const style = {
    backgroundColor: (props.color || 'transparent'),
    display: 'flex',
    flex: 'auto'
  };
  return (
    <div style={style} onClick={props.onClick}></div>
  );
};
Pixel.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  color: React.PropTypes.string
};

let PixelRow = (props) => {
  const pixels = props.row.map((pixel, colIndex) => {
    return (
      <Pixel
         key={colIndex}
         color={pixel}
         onClick={() => { props.onClick(colIndex); }} />
    );
  });
  const style = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  };
  return (
    <div style={style}>{pixels}</div>
  );
};
PixelRow.propTypes = {
  row: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};

let PixelMatrix = (props) => {
  const rows = props.matrix.map((row, rowIndex) => {
    return (
      <PixelRow
         key={rowIndex}
         row={row}
         onClick={(colIndex) => { props.onClick(rowIndex, colIndex); }}
        />
    );
  });
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: props.width,
    height: props.height
  };
  return (
    <div style={style}>{rows}</div>
  );
};
PixelMatrix.propTypes = {
  matrix: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired,
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired
};

const PixelEditor = React.createClass({
  propTypes: {
    matrix: React.PropTypes.array.isRequired,
    pixelColor: React.PropTypes.string,
    width: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    height: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },
  getDefaultProps: function() {
    return {
      pixelColor: '#FF0000'
    };
  },
  getInitialState: function() {
    return {
      pixelColor: this.props.pixelColor
    };
  },
  onClickPixel: function(rowIndex, colIndex) {
    const newValue = this.props.matrix[rowIndex][colIndex] ? '' : this.state.pixelColor;
    this.props.onChange(rowIndex, colIndex, newValue);
  },
  render: function() {
    return (
      <PixelMatrix
         matrix={this.props.matrix}
         width={this.props.width}
         height={this.props.height}
         onClick={this.onClickPixel}
         />
    );
  }
});

export default PixelEditor;
