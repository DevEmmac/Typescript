// INTERFACE IMPLEMENTATION

interface Database<T, k> {
    get(id: k): T;
    set(id: k, value: T): void;
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, k extends DBKeyType> implements Database<T, k> {
    protected db: Record<k, T> = {} as Record<k, T>;
    get(id: k): T {
        return this.db[id];
    }

    set(id: k, value: T): void {
        this.db[id] = value;
    } 
}

class PersistentMemoryDB<T, k extends DBKeyType > extends InMemoryDatabase<T, k> implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}

const myDB = new PersistentMemoryDB<number, string>();
myDB.set("foo", 22);

console.log(myDB.get("foo"));
const saved = myDB.saveToString();

myDB.set("foo", 23);
console.log(myDB.get("foo"))

// const saved = myDB.saveToString();
const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"))