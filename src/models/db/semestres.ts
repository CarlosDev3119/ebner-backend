
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'semestres',
    timestamps: false
})
class Semestre extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    id_semestre!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    semestre!: string;

  
}

export default Semestre;


