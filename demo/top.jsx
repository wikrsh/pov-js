// -*- coding: utf-8 -*-

import React from 'react';
import { Link } from 'react-router';

import DemoPov from './demo-pov';

const TopPage = (props) => {
  return (
    <div id="top">
      <div className="heading">
        <h1>PoV.js</h1>
        <p>React component for displaying persistent of vision</p>
        <a href="https://github.com/wikrsh/pov-js">View source</a>
      </div>
      <div id="pov-example">
        <div className="vibrater">
          <DemoPov
             height={160} />
        </div>
      </div>
      <div className="buttons">
        <Link to="/edit" className="button">Demo</Link>
      </div>
    </div>
  );
};

export default TopPage;
