import { createTables, getConnection } from "./createDatabase";


export async function main() {
    const connection = getConnection();
    const DB = await createTables(false, connection);
    return DB;
}

export type DB = Awaited<ReturnType<typeof main>>