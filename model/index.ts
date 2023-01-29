import { Course } from "./course"
import { Student } from "./student"
import { StudentCourse } from "./studentCourse"

export type ModelWithoutId = {
    [key in keyof Model]: Omit<Model[key], "id">
}

export type Model = {
    Course: Course,
    Student: Student,
    StudentCourse: StudentCourse
}
