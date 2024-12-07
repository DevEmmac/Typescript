// Function creating function
function myLogFunction() {
    return (str: string) => {
        console.log(str)
    }
}
const logger = myLogFunction();
logger("your string");

// Function creating class
function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog: string = "";
        log(str: string) {
            console.log(str);
            this.completeLog += str + "\n";
        }
        dumpLog() {
            return this.completeLog;
        }
    }
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("Foo");
console.log(logger2.dumpLog());

// Functions Creating A Generic Class
function CreateSimplememoryDatabase<T>() {
   return class CreateSimplememoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
        this.db[id] = value;
    }
    get(id: string): T {
       return this.db[id];
    }
    getObject(): object {
        return this.db;
    }
   }
}

const StringDatabase = CreateSimplememoryDatabase<string>();
 const sbd1 = new StringDatabase();
 sbd1.set("a", "hello");

 type Constructor<T> = new (...args:any[]) => T;

 function Dumpable<T extends Constructor<{
    getObject(): object;
 }>
 >(Base: T) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject())
        }
         
    }
 }

 const DumpableStringDatabase = Dumpable(StringDatabase);
 const sbd2 = new DumpableStringDatabase();
 sbd2.set("jack", "hello jack");
 sbd2.dump();