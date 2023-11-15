import ManagerUsuarios from "./managers/ManagerUsuario.js";

const manager = new ManagerUsuarios();

const env = async () => {

    let primerConsulta = await manager.consultarUsuarios();
    console.log(primerConsulta);
    let user = {
        nombre: 'Gabriel',
        apellido: 'Rodriguez',
        edad: 20,
        curso: 'Backend'
    }
    let result = await manager.crearUsuario(user);
    console.log(result);
}

env()