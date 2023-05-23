
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'materias',
    timestamps: false
})
class Materia extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    id_materia!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    materia!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    creditos!: string;

  
}

export default Materia;


