export class Character {
    constructor(name, characterType) {
        this.name = name;
        this.characterType = characterType;
    }

    selfHeal(points) {
        this.hp += points;
        return this.hp;
    }
    takeDamage(points) {
        if (points > this.hp) {
            this.hp = 1;
            return this.hp;
        } else {
            this.hp -= points;
            return this.hp;
        }

    }
    sayName() {
        `Hi my name is ${this.name}`;
    }
}