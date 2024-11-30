let userName: String = "Jack";
let hasLoggedIn: boolean = true;

userName += "Mick"; 

console.log(userName);

let myNumber = 10;

let myRegex = /foo/;

const names: string[] = userName.split("");
const myValue: Array<number> = [1,2,3];

const myPerson: {
    first: string;
    last: string;
    cool: true
    
} = {
    first: "jack",
    last: "herrington",
    cool: true
}

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "e";

if (ids[30] != "D") {
      
} 

for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1, 2, 3].forEach((v) => console.log());
const out: number[] = [4, 5, 6].map((v) => v * 10); 