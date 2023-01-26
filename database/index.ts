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

    const course = await DB.Course.insert({
        end_date: new Date(),
        start_date: new Date(),
        name: "TypeScript",
        max_students: 15
    })
    console.log(course);

    const studentCourse = await DB.studentCourse.insert({
        CourseId: course.id,
        StudentId: student.id
    })
    console.log(studentCourse);
}

main().then(() => {
    console.log("Exiting")
})

