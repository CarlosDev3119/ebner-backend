
import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Calificacion from "./calificaciones";

@Table({
    tableName: 'usuarios',
    timestamps: false
})
class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    id_user!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name_user!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    pass!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    staff_id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    user_type!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    status_user!: boolean;

    @HasMany(() => Calificacion, { foreignKey: "id_usuario" })
    calificaciones!: Calificacion[];
}

export default User;


