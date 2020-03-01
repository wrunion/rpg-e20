import { Vampire } from './../src/vampire';

describe('Vampire', () => {
    var reusableVampire;

    beforeEach(() => {
    reusableVampire = new Vampire("Vlad");
    });
        test('should correctly create a vampire character with a name', () => {
            expect(reusableVampire.name).toEqual("Vlad");
        });
        test('should correctly display hp (health points)', () => {
            expect(reusableVampire.hp).toEqual(20);
        });
});