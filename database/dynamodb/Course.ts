import { DynamoDB } from "aws-sdk"
import { DB } from "../interfaces";

import { randomUUID } from "crypto";

console.log(randomUUID());


const TABLE_NAME = "Course";

export function CreateCourse(db: DynamoDB): Pick<DB["Course"], "insert"> {
    return {
        insert: async (course) => {
            const courseId = randomUUID()
            var params = {
                Item: {
                    "CourseId": {
                        S: courseId
                    },
                    "Name": {
                        S: course.name,
                    },
                    "MaxStudents": {
                        S: "" + course.max_students
                    },
                    "StartDate": {
                        S: course.start_date.toISOString()
                    },
                    "EndDate": {
                        S: course.end_date.toISOString()
                    }
                },
                TableName: TABLE_NAME
            };
            const result = await db.putItem(params).promise();
            return {
                id: courseId,
                ...course,
            }
        }
    }
} 