// -*- coding: utf-8 -*-

export const changePixel = (rowIndex, colIndex, value) => {
  return {
    type: 'CHANGE_PIXEL',
    rowIndex,
    colIndex,
    value
  };
};
