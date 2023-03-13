import { createTables, getConnection } from "./createDatabase";
import { DB } from "../interfaces"


export async function main(): Promise<DB> {
    const connection = getConnection();
    const DB = await createTables(false, connection);
    return DB;
}


// export let db: DB | null = null;
// async function init(){
//     db = await main()
// }
// init()

// let db2: DB | null = null;
// export async function getDB() {
//     if(db2 === null) {
//         db2 = await main()
//     }
//     return db2;
// }