abstract class StreetFighter {
    constructor() {}

        move() {}
        fight() {
            console.log(`${this.name} attack with ${this.getSpeacialAttack()}`)
        }

        abstract getSpeacialAttack(): string;
        // abstract accessors
        abstract get name(): string;
}

class Ryu extends StreetFighter {
    getSpeacialAttack(): string {
        return "Hadoken";
    }
    get name (): string {
        return "Ryu";
    }
}

class ChunLi extends StreetFighter {
    getSpeacialAttack(): string {
        return "Lightening kick";
    }
    get name (): string {
        return "ChunLi";
    }
}

const ryu = new Ryu();
const chunLi = new ChunLi();
ryu.fight()
chunLi.fight()