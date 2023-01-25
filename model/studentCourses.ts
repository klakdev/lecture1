import { Sequelize } from "sequelize";
import { StudentTable } from "./student";
import { CourseTable } from "./course";

export async function createTable(sequelize: Sequelize, Course: CourseTable, Student: StudentTable) {
    const StudentCourse = sequelize.define('student_course', {
      }, {
        schema: "students",
        createdAt: false,
      })
    Course.belongsToMany(Student, { through: StudentCourse })
    Student.belongsToMany(Course, { through: StudentCourse })
    StudentCourse.sync()
}
