
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
};

const user: User = {
    address: {
        number: "",
        street: "",
        zipcode: 4
    },
    birthday: new Date(),
    firstName: "",
    id: "",
    lastName: ""
}

function addUser(user: User) {

}

addUser(user)
