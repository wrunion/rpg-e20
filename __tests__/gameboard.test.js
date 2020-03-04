import { Gameboard } from './../src/gameboard';

describe ('Gameboard', () => {
    test('has a roll dice function that returns a random number between 1 and 6', () => {
        let gameboard = new Gameboard();
        expect(gameboard.rollDice()).toBeGreaterThanOrEqual(1);
        expect(gameboard.rollDice()).toBeLessThanOrEqual(6);
    });
    test(`Should have an isRedSquare function to see if an entered number is a red square`, () => {
        let gameboard = new Gameboard();
        expect(gameboard.isRedSquare(2)).toEqual(true);
        expect(gameboard.isRedSquare(6)).toEqual(false);
    });
    test(`should have an isGreenSquare function to see if an entered number is a green square`, () => {
        let gameboard = new Gameboard();
        expect(gameboard.isGreenSquare(1)).toEqual(true);
        expect(gameboard.isGreenSquare(2)).toEqual(false);
    });
});