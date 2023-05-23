import { DataTypes } from "sequelize";
import { db } from "../../db/config";

export const VistaCalificaciones = db.define("vista_calificaciones", {
  
  calificacion: {
    type: DataTypes.INTEGER
  },
  materia: {
    type: DataTypes.STRING
  },
  tipo_evaluacion: {
    type: DataTypes.STRING
  },
  grupo: {
    type: DataTypes.STRING
  },
  name_user: {
    type: DataTypes.STRING
  },
  semestre: {
    type: DataTypes.STRING
  }
}, {
  tableName: "vista_calificaciones",
  timestamps: false,
  defaultScope: {
    attributes: { exclude: ['id'] } // Exclude the 'id' column from query results
  }
});
