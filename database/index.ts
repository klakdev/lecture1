import { main } from "./dynamodb"
import { DB } from "./interfaces"

export { DB }

export async function init(): Promise<DB> {
    const db = await main() as DB
    return db;
}