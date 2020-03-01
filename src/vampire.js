export class Vampire {
    constructor(name) {
        this.name = name;
        this.hp = 20;
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
}