import pad = require('left-pad');
import { Coordinate } from './coordinate';

export const convertCoordinate = (value: number, type: Coordinate) => {
  let out = '';
  if (type === Coordinate.Latitude) {
    if (value >= 0) {
      out += 'N';
    } else {
      value *= -1
      out += 'S';
    }
  } else {
    if (value >= 0) {
      out += 'E';
    } else {
      value *= -1;
      out += 'W';
    }
  }
  let num1 = Math.floor(value);
  let num2 = Math.floor((value - num1) * 60);
  let num3 = Math.floor(((value - num1) * 60 - num2) * 60);
  let num4 = Math.round((((value - num1) * 60 - num2) * 60 - num3) * 1000);
  if (num4 === 1000) {
    num4 = 0;
    num3 += 1;
  }
  if (num3 === 60) {
    num3 = 0;
    num2 += 1;
  }
  if (num2 === 60) {
    num2 = 0;
    num1 += 1;
  }
  out += `${pad(num1, 3, '0')}${pad(num2, 2, '0')}${pad(num3, 2, '0')}${pad(
    num4,
    3,
    '0'
  )}`;
  return out;
};