// -*- coding: utf-8 -*-

import React from 'react';
import { Link } from 'react-router';
import DemoPov from './demo-pov';

const RunPage = (props) => {
  return (
    <div id="edit">
      <div className="heading">
        <p>Shake display fast!!</p>
      </div>
      <div className="editor">
        <DemoPov
           height={300} />
      </div>
      <div className="buttons">
        <Link to="/edit" className="button">Stop</Link>
      </div>
      <div className="buttons">
        <Link to="/" className="link-button">Back to Top</Link>
      </div>
    </div>
  );
};

export default RunPage;
