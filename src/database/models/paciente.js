'use strict'  //para que no se usen variables no definidas


 
module.exports = (sequelize,DataTypes) => {
    // defino modelo tabla paciente
    let Paciente = sequelize.define ('paciente', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey:true,
            alowNull: false

        },
        nombre:{
            type: DataTypes.STRING,
            alowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            alowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        edad: {
            type: DataTypes.INTEGER
        },
        password: {
            type: DataTypes.STRING,
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

    Paciente.associate = models => {
        Paciente.hasMany(models.paciente_medico)
    }

    return Paciente
    
}