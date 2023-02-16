import express from "express"
import { DB } from "../database"

function studentIDHandler() {
    const router = express.Router()
    router.get("/", (req, res) => {})
    router.delete("/", (req, res) => {})
    router.put("/", (req, res) => {})
    return router
}

export function createStudentRoute(db: DB) {
    const studentRouter = express.Router({});

    studentRouter.use('/:studentId', studentIDHandler())
    studentRouter.get('/:studentId/courses', async(req, res) => {
        const student = await db.Course.searchCourseOfStudent(req.params.studentId);
    })
    return studentRouter;
}
