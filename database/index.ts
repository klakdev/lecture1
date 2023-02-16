import { createTables, getConnection } from "./createDatabase";


export async function main() {
    const connection = getConnection();
    const DB = await createTables(false, connection);
    global.db = DB;
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

export type DB = Awaited<ReturnType<typeof main>>