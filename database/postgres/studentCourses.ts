import { Model, Sequelize } from "sequelize";
import { Model as AppModel } from "../model";
import { CourseInterface } from "./course";
import { StudentInterface } from "./student";

type StudentSchemaModel = Model<AppModel["StudentCourse"]>

export interface StudentCourseInterface {
  insert: (studentCourse: AppModel["StudentCourse"]) => Promise<AppModel["StudentCourse"]>;
  getStudentWithCurses(id: string): Promise<undefined | AppModel["Student"] & { Courses: Array<AppModel["Course"]> }>
  getStudentWithCursesLazy(id: string): Promise<undefined | AppModel["Student"] & { Courses?: Array<AppModel["Course"]> }>
}

export async function createTable(sequelize: Sequelize, Course: CourseInterface["Schema"], Student: StudentInterface["Schema"]): Promise<StudentCourseInterface> {
  const StudentCourse = sequelize.define<StudentSchemaModel>('student_course', {
  } as AppModel["StudentCourse"], {
    schema: "students",
    createdAt: false,
  })
  Course.belongsToMany(Student, { through: StudentCourse })
  Student.belongsToMany(Course, { through: StudentCourse })
  await StudentCourse.sync()

  return {
    async insert(studentCourse) {
      const result = await StudentCourse.create(studentCourse)
      return result.toJSON();
    },
    async getStudentWithCurses(id) {
      const result = await Student.findByPk(id, {
          include: Course
      });
      return result?.toJSON<AppModel["Student"] & { Courses: Array<AppModel["Course"]> }>() 
    },
    async getStudentWithCursesLazy(id) {
      const result = await Student.findByPk(id);
      if(!result) return;
      const courses = await (<any>result)?.getCourses()
      return {
       ...result.toJSON(),
       Courses: courses.map((c: any) => c.toJSON())
      }
    },
  }
}
