import { Model, Sequelize, DataTypes } from "sequelize";

export async function createTable(sequelize: Sequelize) {
    const Course = sequelize.define("Course", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        max_students: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, );
    
    await Course.sync();
    return Course;
}



export type CourseTable = Awaited<ReturnType<typeof createTable>>;
