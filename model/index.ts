import { createTables, getConnection } from "./createDatabase";


async function main() {
    const connection = getConnection();
    await createTables(false, connection);
}

main().then(() => {
    console.log("Exiting")
})

