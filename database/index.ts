import { createTables, getConnection } from "./createDatabase";


async function main() {
    const connection = getConnection();
    const DB = await createTables(false, connection);
    const student = await DB.Student.insert({
        birthday: new Date(),
        city: "Jerusalem",
        country: "Israel",
        name: "Yaki",
        phoneNumber: "0506421356",
        street1: "lala",
        street2: "ertrtr"
    });
    console.log(student);

    const course1 = await DB.Course.insert({
        end_date: new Date(),
        start_date: new Date(),
        name: "TypeScript1",
        max_students: 15
    })

    const course2 = await DB.Course.insert({
        end_date: new Date(),
        start_date: new Date(),
        name: "TypeScript2",
        max_students: 10
    })


    await DB.studentCourse.insert({
        CourseId: course1.id,
        StudentId: student.id
    })
    await DB.studentCourse.insert({
        CourseId: course2.id,
        StudentId: student.id
    })

    // const s = await DB.Student.getStudent(student.id)
    // console.log("Student: %j", s);

    // const s2 = await DB.studentCourse.getStudentWithCurses(student.id)
    // console.log("Student with courses: %j", s2);

    const s3 = await DB.studentCourse.getStudentWithCursesLazy(student.id)
    console.log("Student with courses lazy: %j", s3);
}

main().then(() => {
    console.log("Exiting")
})

