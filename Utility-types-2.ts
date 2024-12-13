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