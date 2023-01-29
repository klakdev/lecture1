import { Sequelize, DataTypes, Model, ModelStatic } from "sequelize";
import { Model as AppModel } from "../model"

type StudentSchemaModel = Model<AppModel["Student"]>

export interface StudentInterface {
    Schema: ModelStatic<StudentSchemaModel>
    insert: (student: Omit<AppModel["Student"], "id" | "completeRegistration">) => Promise<AppModel["Student"]>
    getStudent(id: string): Promise<AppModel["Student"] | undefined>;
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
    
    await StudentSchema.sync()

    return {
        Schema: StudentSchema,
        async insert(student) {
            const result = await StudentSchema.create(student as AppModel["Student"])
            return result.toJSON();
        },
        async getStudent(id) {
            const result = await StudentSchema.findByPk(id);
            return result?.toJSON(); // return result ? result.toJSON() : undefined
        }
    };
}
