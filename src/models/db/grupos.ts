
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'grupos',
    timestamps: false
})
class Grupo extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    id_grupo!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    grupo!: string;

  
}

export default Grupo;


