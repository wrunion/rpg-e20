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
        test('should correctly test selfHeal function', () =>  {
            expect(reusableVampire.selfHeal(10)).toEqual(30);
        });
        test('should correctly test takeDamage function', () => {
            expect(reusableVampire.takeDamage(10)).toEqual(10);
        });
});