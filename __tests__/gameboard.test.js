/* eslint-disable no-undef */
import { Gameboard } from './../src/gameboard';

describe ('Gameboard', () => {
 test('has a roll dice function that returns a random number between 1 and 6', () => {
  let gameboard = new Gameboard();
  expect(gameboard.rollDice()).toBeGreaterThanOrEqual(1);
  expect(gameboard.rollDice()).toBeLessThanOrEqual(6);
 });
 test(`Should have an isRedSquare function to see if an entered number is a red square`, () => {
  let gameboard = new Gameboard();
  expect(gameboard.isRedSquare(1)).toEqual(true);
  expect(gameboard.isRedSquare(5)).toEqual(false);
 });
 test(`should have an isGreenSquare function to see if an entered number is a green square`, () => {
  let gameboard = new Gameboard();
  expect(gameboard.isGreenSquare(2)).toEqual(true);
  expect(gameboard.isGreenSquare(4)).toEqual(false);
 });

 test(`Should have an isSpecialEventSquare function that takes a number from a user and returns true or false`, () => {
  let gameboard = new Gameboard();
  expect(gameboard.isSpecialEventSquare(5)).toEqual(true);
  expect(gameboard.isSpecialEventSquare(6)).toEqual(false);
 });

});