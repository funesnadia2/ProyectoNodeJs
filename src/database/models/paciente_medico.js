'use strict'  //para que no se usen variables no definidas


 
module.exports = (sequelize,DataTypes) => {
    // defino modelo tabla paciente
    let Paciente_Medico = sequelize.define ('paciente_medico', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey:true,
            alowNull: false

        },
        createdAt:{//fecha de creacion
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW, //valor por defecto
            alowNull: false
        },
        updatedAt:{//fecha de actualizacion
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW, //valor por defecto
            alowNull: false
        },
        deletedAt:{//fecha de borrado
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    }, {
        paranoid:true, //elimina los registros de forma logica
        freezeTableName:true, //no modifica el nombre de la tabla a plural
    }) 

    Paciente_Medico.associate = models => {
        Paciente_Medico.belongsTo(models.medico) 
        Paciente_Medico.belongsTo(models.paciente)
    }

    return Paciente_Medico
    
}