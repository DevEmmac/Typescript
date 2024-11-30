// PLUCK FUNCTION
function pluck<DataType, keyType extends keyof DataType>(
    items: DataType[],
    key: keyType
): DataType[keyType][] {
   return items.map((item) => item[key]);
}

const dogs = [
    {name: "Mini", age: 12},
    {name: "LG", age: 13}
]

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

// Event Map 
interface BaseEvent {
    time: number;    
    user: string;
}
interface EventMap {
    addToCart: BaseEvent & { quantity: number; productID: string;  },
    checkout: BaseEvent
} 
function sendEvent<Name extends keyof EventMap>(
    name: Name, 
    data: EventMap[Name]
): void {
    console.log([name, data])
}

sendEvent("addToCart", {productID: "foo", user: "bar", quantity: 1, time: 11})
sendEvent("checkout", {time: 20, user: "bob" })