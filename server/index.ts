import express from "express"
import { createStudentRoute } from "./student"
import { createRouter } from "./course"
import { main as initDB } from "../database"


async function main() {
  const app = express()

  const db = await initDB()
  app.use(express.json({ limit: "10kb" }))
  app.use("/student", createStudentRoute(db));
  app.use("/course", createRouter(db))
  
  app.listen(8088, () => {
    console.log(`Example app listening on port 8088`)
  })
}

main().then(() => {
  console.log("Exiting")
})

// // method  protocol       auth        host        port     path           query
// //   POST     http://user:password@api.google.com:8088/user/1234?field=first_name&type=json

// //   headers
//      "Content-Type": "application/json"
//
// //   body
//     {
//         first_name: "Yaki",
//         last_name: "Klein"
//     }

// REST

// Methods
// GET - retrieve object
// POST - create object
// PUT - update object
// DELETE - delete object

// model/<id>
// GET course/<id>/students/<id>
// GET courses
// POST course
// PUT course/<id>
// DELETE course/<id>
// GET students/<id>

// GET students/<id>?fields=id,first_name,last_name&extended_data


// Response
// Status Codes




