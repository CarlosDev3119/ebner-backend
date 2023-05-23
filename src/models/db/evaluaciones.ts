
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'evaluaciones',
    timestamps: false
})
class Evaluacion extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    id_evaluacion!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    tipo_evaluacion!: string;

  
}

export default Evaluacion;


