const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No fue posible grabar', err);
    });
};

const cargarDB = () =>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    } 
};

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();
    return listadoPorHacer;
};

const getListado = () => {
    try {
        cargarDB();
        return listadoPorHacer;
    } catch (error) {

    }
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    try {
        cargarDB();

        let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion ); 
        
        if(index >= 0){
            listadoPorHacer[index].completado = completado;
            guardarDB();
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        return false;
    }
};

const borrar = (descripcion) => {
    try {
        cargarDB();
        
        let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion ); 
        console.log(index);
        if(index >= 0){
            listadoPorHacer.splice(index,1);
            guardarDB();
            return true;
        }
        else{
            return false;
        }

    } catch (error) {
        return  false;
    }
};   

module.exports = {
    crear,getListado,actualizar,borrar
};