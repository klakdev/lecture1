import { Course } from "../../model/course";
import { Model as AppModel } from "../../model"

export interface CourseInterface {
    insert: (course: Omit<Course, "id">) => Promise<Course>
    searchById: (id: string) => Promise<Course|undefined>
    searchCourseOfStudent: (studentId: string) => Promise<Course[]>
}

export interface StudentInterface {
    insert: (student: Omit<AppModel["Student"], "id" | "completeRegistration">) => Promise<AppModel["Student"]>
    getStudent(id: string): Promise<AppModel["Student"] | undefined>;
}

export interface StudentCourseInterface {
    insert: (studentCourse: AppModel["StudentCourse"]) => Promise<AppModel["StudentCourse"]>;
    getStudentWithCurses(id: string): Promise<undefined | AppModel["Student"] & { Courses: Array<AppModel["Course"]> }>
    getStudentWithCursesLazy(id: string): Promise<undefined | AppModel["Student"] & { Courses?: Array<AppModel["Course"]> }>
}

export interface DB {
    Student: StudentInterface,
    Course: CourseInterface,
    StudentCourse: StudentCourseInterface
}