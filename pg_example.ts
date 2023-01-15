import { randomUUID } from "crypto"
import { Client } from "pg"

async function makeQuery(
    name: string, birthday: Date, country:string, city: string, 
    street_1: string, postal_code: string, phone_number: string
) {

    // simple queries
    const client = new Client({
        user: 'student_server',
        password: '12345678',
        database: "school"
      })
    await client.connect()
    
    const id = randomUUID();
    const res = await client.query<{id: string}>(
        `INSERT INTO students.students(id, name, birthday, country, city, street_1, postal_code, phone_number)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
         [id, name, birthday.toISOString(), country, city, street_1, postal_code, phone_number]
    )
    console.log("insert - %j", res.rows)

    const select1 = await client.query(
        `SELECT id, country, city FROM students.students
        WHERE id = $1`,
        [res.rows[0].id]
    )
    console.log("select - %j", select1.rows)
    const updated = await client.query(
        `UPDATE students.students AS s
        SET city=$1,
        country =$3
        WHERE id = $2
        RETURNING *`,
        ["Tel Aviv", res.rows[0].id, "U.S.A"]
    )
    console.log("update - %j", updated.rows)


    const deleted = await client.query(
        `DELETE FROM students.students
        WHERE id = $1
        RETURNING *`,
        [res.rows[0].id]
    )
    console.log("delete - %j", deleted.rows)

    const select2 = await client.query(
        `SELECT id, country, city FROM students.students
        WHERE id = $1`,
        [res.rows[0].id]
    )
    console.log("select - %j", select2.rows)

    


    await client.end()
}

makeQuery("Yaki", new Date("09/24/1984"), "Israel", "Jerusalem", "Some Street", "12345", "0506421356");