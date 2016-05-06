// -*- coding: utf-8 -*-

import { combineReducers } from 'redux';

import initialImage from './mock-image';

const image = (state = initialImage, action) => {
  switch (action.type) {

  case 'CHANGE_PIXEL':
    const preRows = state.slice(0, action.rowIndex);
    const postRows = state.slice(action.rowIndex + 1, state.length);
    const targetRow = state[action.rowIndex];

    const row = targetRow.slice(0, action.colIndex).concat(
      [ action.value ],
      targetRow.slice(action.colIndex + 1, targetRow.length)
    );

    return preRows.concat([row], postRows);

  default:
    return state;

  }
};

const demoApp = combineReducers({
  image
});

export default demoApp;
