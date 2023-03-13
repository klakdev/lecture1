import { DynamoDB } from "aws-sdk"
import { DB } from "../interfaces"
import { CreateCourse } from "./Course"


export async function main(): Promise<Pick<DB, "Course">> {
    const dynamodb = new DynamoDB({region: "us-east-1"});
    const course = CreateCourse(dynamodb)

    return {
        Course: course as DB["Course"],
    }
}