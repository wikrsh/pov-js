// -*- coding: utf-8 -*-

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { PixelEditor } from '../lib';
import { changePixel } from './actions';

const mapStateToProps = (state) => {
  return {
    matrix: state.image
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (rowIndex, colIndex, value) => {
      dispatch(changePixel(rowIndex, colIndex, value));
    }
  };
};

const DemoPixelEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(PixelEditor);

const EditPage = (props) => {
  return (
    <div id="edit">
      <div className="heading">
        <p>Edit pixels and Click 'Run' to start.</p>
      </div>
      <div className="editor">
        <DemoPixelEditor
           width={300}
           height={300} />
      </div>
      <div className="buttons">
        <Link to="/run" className="button">Run</Link>
      </div>
      <div className="buttons">
        <Link to="/" className="link-button">Back to Top</Link>
      </div>
    </div>
  );
};

export default EditPage;
