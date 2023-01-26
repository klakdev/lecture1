import { Sequelize, DataTypes, Model, ModelStatic } from "sequelize";
import { Student } from "../model/student"

type StudentSchemaModel = Model<Student>

export interface StudentInterface {
    Schema: ModelStatic<StudentSchemaModel>
    insert: (student: Omit<Student, "id" | "completeRegistration">) => Promise<Student>
}


export async function createTable(sequelize: Sequelize): Promise<StudentInterface> {
    const StudentSchema = sequelize.define<StudentSchemaModel>("Student", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
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
        street1: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        street2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        phoneNumber: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        completeRegistration: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        }
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
    
    await StudentSchema.sync({force: true})
    return {
        Schema: StudentSchema,
        async insert(student) {
            const result = await StudentSchema.create(student as Student)
            return result.toJSON();
        },
    };
}
