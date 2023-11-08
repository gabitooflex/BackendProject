class TicketManager{

    #precioBaseDeGanancia = 1.15;

    constructor(){
        this.eventos = [];
    }
    addEvento = (nombre,lugar,precio) => {

        let CantEventos = this.eventos.length

        if(!nombre || !lugar || !precio){
            return ('Se requieren todos los datos');
        }

        const eventoLugar = this.eventos.find(evento => evento.lugar == lugar)

        if(eventoLugar){
            return `Este evento ya existe en : ${lugar}`;
        }

        const evento = {
            nombre,
            lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: 50,
            fecha: Date(),
            participantes: [],
            id: ++CantEventos
        }
        
        this.eventos.push(evento);

        return this.eventos;
    }
    


    getEventos = () => {
        return this.eventos;
    }
    getEvento = (idEvento) => {

        const evento = this.eventos.find ( evento => evento.id == idEvento)

        if(evento){
            return evento;
        }else{
            return 'NotFound'
        }
         
    }
    addParticipante= (idEvento, idParticipante) => {

        const evento = this.getEvento(idEvento);

        if(evento === 'Not found'){
            return 'El evento no existe';
        }

        const registro = evento.participantes.find(idPersona => idPersona == idParticipante);

        if(registro){
            return `El participante ${idParticipante} ya ha comprado su entrada`
        }
        evento.participantes.push(idParticipante);
        return evento;
    }

}
const ticketManager = new TicketManager();

// let evento = TickerManager.getEvento(1) 
ticketManager.addEvento('Cosquin Rock', 'Rambla', 4500)
evento = ticketManager.addEvento('Cosquin Rock', 'Punta Del Este', 4500)

// console.log(evento);
// console.log('evento:', evento);
console.log('----------------------------------------------');
console.log('----------------------------------------------');
const unEvento = ticketManager.getEvento(11);

// console.log(unEvento);

let user = ticketManager.addParticipante(1,1)
console.log(user);
user = ticketManager.addParticipante(1,1)
console.log(user);
user = ticketManager.addParticipante(1,2)
console.log(user);
user = ticketManager.addParticipante(1,2)
console.log(user);