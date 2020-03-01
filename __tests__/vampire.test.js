import { Vampire } from './../src/vampire';

describe('Vampire', () => {
    var reusableVampire;

    beforeEach(() => {
    reusableVampire = new Vampire("Vlad");
    });
        test('should correctly create a vampire character with a name', () => {
        reusableVampire = new Vampire("Vlad");
        expect(reusableVampire.name).toEqual("Vlad");
        });
        test('should correctly display hp (health points)', () => {
            let hp = new Hp(20);
    reusableVampire = new Vampire("Vlad");
    expect(vampire.hp).toEqual(20);
        });
});