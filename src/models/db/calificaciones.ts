import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table, BelongsTo } from "sequelize-typescript";
import Materia from "./materias";
import Evaluacion from "./evaluaciones";
import Grupo from "./grupos";
import User from "./users";
import Semestre from "./semestres";


@Table({
    tableName: 'calificaciones',
    timestamps: false
})
class Calificacion extends Model<Calificacion> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    id_calificacion!: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    calificacion!: number;

    @ForeignKey(() => Materia)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_materia!: number;

    @BelongsTo(() => Materia, { foreignKey: "id_materia" })
    materia!: Materia;

    @ForeignKey(() => Evaluacion)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_evaluacion!: number;

    @BelongsTo(() => Evaluacion, { foreignKey: "id_evaluacion" })
    evaluacion!: Evaluacion;

    @ForeignKey(() => Grupo)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_grupo!: number;

    @BelongsTo(() => Grupo, { foreignKey: "id_grupo" })
    grupo!: Grupo;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_usuario!: number;

    @BelongsTo(() => User, { foreignKey: "id_usuario" })
    usuario!: User;

    @ForeignKey(() => Semestre)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_semestre!: number;

    @BelongsTo(() => Semestre, { foreignKey: "id_semestre" })
    semestre!: Semestre;
}

export default Calificacion;
