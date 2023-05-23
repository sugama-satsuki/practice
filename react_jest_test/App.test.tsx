import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import {calcFactorial} from './utils/calc';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('/utils/calc.tsのremoveDuplicates関数のテスト', () => {
    const numArr: number[] = [3, 4, 2, 6, 2, 2, 1, 3, 4, 5, 7];
    const removeDuplicates = require('./utils/calc');
  
    console.log(removeDuplicates(numArr));
    expect(removeDuplicates(numArr)).toStrictEqual([6, 1, 5, 7]);
});


function calcFactorial(num: number):number {
  let result: number = 1;
  for(let i = num; i > 0;i--) {
      result = result * i;
  }
  return result;
}

test('/utils/calc.tsのcalcFactorial関数のテスト', () => {
  const num: number = 4;

  console.log(calcFactorial(num));
  expect(calcFactorial(num)).toStrictEqual(24);
});