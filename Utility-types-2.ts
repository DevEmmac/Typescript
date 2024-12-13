type Name = {
    first: string;
    last: string;
}

function addFullName(name: Name): Name & {
    fullName: string;
} {
    return {
        ...name,
        fullName: `${name.first} ${name.last}`
    }
}

function permuteRows<J extends (...args: any[]) => any>(iteratorFunc: J, data: Parameters<J>[0][])
 : ReturnType<J>[] {
    return data.map(iteratorFunc);
 }

 console.log(permuteRows(addFullName, [{first: "Ola", last: "Emmanuel"}]));

 class PersonWithFullName {
     constructor (public name: Name) {}
    
     get fullname() {
        return `${this.name.first} ${this.name.last}`
     }
    }

    function createObjects<T extends new (...args: any[]) => any>(ObjectType: T, data: ConstructorParameters<T>[0][])
     : InstanceType<T>[] {
         return data.map(item => new ObjectType(item));
     }

     console.log(createObjects(PersonWithFullName, [{first: "Sunkanmi", last: "Mick"}])
    .map(obj => obj.fullname       
    )
);