;
var user = {
    address: {
        number: 12,
        street: "",
        zipcode: 4
    },
    birthday: new Date(),
    firstName: "",
    id: "",
    lastName: "",
    hobbies: ["basketball", "guitar"]
};
function printUser(user) {
    console.log("user %s", user);
}
printUser(user);

