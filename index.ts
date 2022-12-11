import { constants } from 'node:fs';
import {  open, createReadStream, createWriteStream  } from 'node:fs';
import * as readline from 'node:readline';
import { stdin as input, stdout as output, stdout } from 'node:process';

const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t))

async function run() {
    // const rl = readline.createInterface({ input, output });
    
    // rl.question('What do you think of Node.js? ', (answer) => {     
    //     stdout.write(`Thank you for your valuable feedback: ${answer}\n`);
    //     rl.close();
    // });
    for(let i = 0; i < 100000; i++) {
        const user = {
            name: "Yaki",
            id: i
        }
        writeData(user);
        await sleep(1000)
    }

}

const writeStream = createWriteStream("lecture2.txt")

function writeData(data) {
    // writeStream.write(JSON.stringify(data) + "\n");
    // stdout.write(JSON.stringify(data) + "\n");
    // console.log(JSON.stringify(data));
}


run()
