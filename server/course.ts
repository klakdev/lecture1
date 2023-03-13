import express, { Response, Request } from "express"
import { DB } from "../database"

export function createRouter(db: DB) {
    const courseRouter = express.Router();

    courseRouter.post('/', async (req: Request, res: Response) => {
        try {
            const { name, max_students, start_date, end_date } = req.body;
            const course = await db.Course.insert({
                max_students, name, 
                start_date: new Date(start_date),
                end_date: new Date(end_date)
            })
            res.json(course);
        } catch(e) {
            console.log("error: ", e)
            res.status(400).json({
                "status": "failed to insert"
            });
        }

    })

    courseRouter.get('/:courseId', async (req: Request, res: Response) => {
        const course = await db.Course.searchById(req.params.courseId);
        res.json(course);
    })
      
    courseRouter.post("/:courseId/students", (req: Request, res: Response) => {
        res.send({
          courseId: req.params.courseId,
          studentId: req.body.studentId,
          onZoom: req.body.onZoom
        })
    })

    return courseRouter;
}
