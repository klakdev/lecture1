import express, { Response, Request } from "express"

const app = express()


app.get('/course/:courseId/students/:studentId', (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json")
    res.sendFile("./file.txt")
    res.
})

app.get('/user', (_req, res) => {
    res.send('Hello World!')
})

app.listen(8088, () => {
  console.log(`Example app listening on port 8088`)
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




