class Doggy {
    constructor(public readonly name: string,public readonly age: number) {
      this.name = name;
    }
}

const lgg = new Doggy("LG", 15);
console.log(lgg.name);
console.log(lgg.age);

// Static member fields
class DogList {
    private doggies: Doggy[] = [];

    static instance: DogList = new DogList();

    private constructor() {}

    static addDog(dog: Doggy) {
      DogList.instance.doggies.push(dog);  
    }

    getDogs() {
        return this.doggies;
    }
}

DogList.addDog(lgg);
console.log(DogList.instance.getDogs())
// const Dl = new DogList();