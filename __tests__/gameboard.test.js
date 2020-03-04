import { Gameboard } from './../src/gameboard';

describe ('Gameboard', () => {
    test('has a roll dice function that returns a random number between 1 and 6', () => {
        let gameboard = new Gameboard();
        expect(rollDice()).toBeGreaterThanOrEqual(1);
        expect(rollDice()).toBeLessThanOrEqual(6);
    });
});