
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

function printName(firstName, lastName) {
    return firstName + " " + lastName;
}

const person = {
    firstName: "Yaki",
    lastName: "Klein",
    age: 37,
    printName: function() {
        return this.firstName + " " + this.lastName;
    }
}

abstract class Person implements Human {
    firstName: string;
    lastName: string;
    birthday: any;
    constructor(firstName: string, lastName: string, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    abstract  printName(): string;
}


class Student extends Person<Date> {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName, new Date())
    }
    printName(): string {
        return "Student:" + this.firstName + " " + this.lastName;
    }
    satHappyBirthday() {
        this.birthday.getFullYear()
    }
}

class Lecturer extends Person {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName, 12354545)
    }
    printName(): string {
        return "Lecturer:" + this.firstName + " " + this.lastName;
    }

}

interface Human<T extends Date | string | number> {
    firstName: string;
    lastName: string;
    birthday: T;
    hobbies?: Array<string> 
    printName: () => string;
    getBirthday: () => T
    
}
const x: Human<> = {
    birthday: 
}




add<number>(1, 1)
