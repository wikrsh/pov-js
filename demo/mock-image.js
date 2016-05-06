// -*- coding: utf-8 -*-

const sketch = [
  '  xxxx  ',
  ' x    x ',
  'x x  x x',
  'x      x',
  'x x  x x',
  'x  xx  x',
  ' x    x ',
  '  xxxx  '
];
const initialImage = sketch.map((line) => {
  return [...line].map((char) => char === 'x' ? '#FF0000' : '');
});

export default initialImage;
