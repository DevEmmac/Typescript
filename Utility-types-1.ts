interface MyUser {
    name: string;
    id: number;
    email?: string;
    phone?: string;
}
// Partial
type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals ): MyUser => {
    return {
        ...user,
        ...overrides,
    } 
};

console.log(merge({
    name: "Jack",
    id: 2,
    email: "dontemail@dontemail.com",
},
{
    email: "dontemail@dontemail.com"
  }
 )
);

// Required Utility
type RequiredMyUser = Required<MyUser>;

// Pick
type justEmailAndName = Pick<MyUser, "email" | "name">;

// Record
type userWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], userWithoutID> => {
    return users.reduce((a, v) => {
        const {id, ...other } = v;
       return {
        ...a,
        [id]: other,
       };
    }, {});
}

console.log(mapById([
    {
        id: 1,
        name: "Mr. foo"
    },
    {
        id: 2,
        name: "Mrs. baz"
    }
]));

// OMIT function