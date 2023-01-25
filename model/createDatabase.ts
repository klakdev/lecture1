import { Model, Sequelize, DataTypes } from "sequelize";
import { createTable as createStudent } from "./student";
import { createTable as createCourse } from "./course";
import { createTable as createStudentCourse } from "./studentCourses";

export async function createDatabase() {
    const sequelize = new Sequelize({
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        database: "school",
        username: 'postgres',
        password: '12345678',
        logging: (sql) => {
            console.log("Query: %s", sql)
        }
    })
    const result = await sequelize.query(`CREATE DATABASE school_orm WITH                    \
    OWNER = student_server 
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;`)
    await sequelize.query("GRANT ALL ON DATABASE school_orm TO student_server;")
    console.log(result)
}

export async function createSchema(sequelize: Sequelize) {
    const result = await sequelize.query("CREATE SCHEMA students")
    console.log(result)
}

export function getConnection() {
    const sequelize = new Sequelize({
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        database: "school_orm",
        username: 'student_server',
        password: '12345678',
        logging: (sql) => {
            console.log("Query: %s", sql)
        }
    })
    return sequelize;
} 

export async function createTables(createDB: boolean,sequelize: Sequelize) {
    if(createDB) await createDatabase()

    const connection = getConnection()
    if(createDB) await createSchema(connection)

    const Student = await createStudent(connection);
    const Course = await createCourse(connection);
    await createStudentCourse(connection, Course, Student);
}