import { Sequelize, DataTypes } from "sequelize";

export async function createTable(sequelize: Sequelize) {
    const Student = sequelize.define("Student", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        city: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        country: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        street_1: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        street_2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        phone_number: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        complete_registration: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
    }, {
        indexes: [{
            name: "city_index",
            fields: [{
                name: "city",
                order: "ASC"
            }]
        }],
        schema: "students",
        createdAt: false,
    })
    
    await Student.sync()
    return Student;
}

export type StudentTable = Awaited<ReturnType<typeof createTable>>;