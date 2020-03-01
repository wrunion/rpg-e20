export class Vampire {
    constructor(name) {
        this.name = name;
        this.hp = 20;
    }
    selfHeal(points) {
        this.hp += points;
        return this.hp;
    }
}