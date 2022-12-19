
const str = "abc"
const buf = Buffer.from("abc")


str[2] = "d";
buf[2] = "d".charCodeAt(0);



const phoneNumbers: Array<{
    name: string;
    phone: string;
}> = [{
    name: "Yaki Klein",
    phone: "0506421356"
}, {
    "name" : "Messi",
    "phone": "1235454565"
}, /*1M objects*/]

const messi = phoneNumbers.find(u => u.name === "Messi");

const phone = messi?.phone;


const namePhoneMap = new Map<string, string>([
    ["Messi", "123456546546"],
    ["Yaki Klein", "3423234334"]
    /*1M key values*/
])

function mapFunc(key: string): number {
    return 2;
}

"Messy" => 3
"Yaki Klein" => 6,
"Yossi" => 6
/** 1M objects */

[



    "Messi" => "123456546546", /**10K keys */

    
    "Yaki Klein" => "3423234334", 
    
    
    
    
    




    
    
    "Yossi" => "6456546"
]

const phone = namePhoneMap.get("Messi");

const USER_BUF_LEN = 100;
const FILL_CHAR = "~"


const buf = Buffer.alloc(USER_BUF_LEN, FILL_CHAR);
const firstNamePlace = [0, 9];
const lastNamePlace = [10, 19];

const firstName = "Yaki";
const lastName = "Klein";

for(let i = 0; i < firstName.length; i++) {
    buf[firstNamePlace[0] + i] = firstName.charCodeAt(i)
}

for(let i = 0; i < lastName.length; i++) {
    buf[lastNamePlace[0] + i] = lastName.charCodeAt(i)
}

file.write(buf);


file.read(buf, 4 * USER_BUF_LEN)

buf.


