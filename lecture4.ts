
interface User {
    id: string;
    firstName: string;
    lastName: string;
    address: {
        street: string;
        number: number;
        zipcode: number;
    },
    birthday: Date;
    hobbies: Array<"basketball"| "guitar">
};

const user: User = {
    address: {
        number: 12,
        street: "",
        zipcode: 4
    },
    birthday: new Date(),
    firstName: "",
    id: "",
    lastName: "",
    hobbies:["basketball", "guitar"]
}

type User2 = User & {
    numberOfKids: number
}

type User3 = Omit<User, "address">
type User4 = Pick<User, "address" | "firstName">



function printUser(user: User3) {
    console.log("user %s", user)
    return "hello" as const
}


type printUserParams = Parameters<typeof printUser>

const x = printUser(user);
if(x === "goodbye") {
    
}

