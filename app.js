//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./todo/todo');
const colors = require('colors')

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log('========Por Hacer======='.green);
            console.log(tarea.descripcion);
            console.log('Estado ',tarea.completado);
            console.log('========================'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.compleado);
        console.log(actualizado);
        break;
    case 'borrar':
        let res = porHacer.borrar(argv.descripcion);
        console.log('========Por Hacer======='.red + res);
        if(res){
            console.log(`Tarea ${argv.descripcion} ha sido borrada`);
        }
        else{
            console.log(`Tarea ${argv.descripcion} no existe`);
        }
        
        console.log('========================'.red);
        break;
    default:
        console.log('Comando incorrecto');
}