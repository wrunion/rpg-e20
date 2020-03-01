import { Vampire } from './../src/vampire';

describe('Vampire', () => {

    test('should correctly create a vampire character with a name', () => {
        let vampire = new Vampire("Vlad");
        expect(vampire.name).toEqual("Vlad");
    });
    test('should correctly display hp (health points)', () => {
        let hp = new Hp("20");
        expect(vampire.hp).toEqual("20");
    });
});