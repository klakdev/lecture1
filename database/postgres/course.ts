import { Model, Sequelize, DataTypes, ModelStatic } from "sequelize";
import { Course } from "../../model/course";

type CourseSchemaModel = Model<Course>

export interface CourseInterface {
    Schema: ModelStatic<CourseSchemaModel>
    insert: (course: Omit<Course, "id">) => Promise<Course>
    searchById: (id: string) => Promise<Course|undefined>
    searchCourseOfStudent: (studentId: string) => Promise<Course[]>
}


export async function createTable(sequelize: Sequelize): Promise<CourseInterface> {
    const CourseSchema = sequelize.define<CourseSchemaModel>("Course", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
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
    }, {
        schema: "students",
        createdAt: false
    });
    
    await CourseSchema.sync();
    return {
        Schema: CourseSchema,
        async insert(course) {
            const result = await CourseSchema.create(course as Course)
            return result.toJSON();
        },
        async searchById(id: string) {
            const result = await CourseSchema.findByPk(id)
            return result?.toJSON();
        },
        async searchCourseOfStudent(studentId) {
            const result = await CourseSchema.findAll({
                
            })
            return result.map(r => r.toJSON())
        }
    };
}



export type CourseTable = Awaited<ReturnType<typeof createTable>>;
