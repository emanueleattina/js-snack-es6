// milestone 1
// definire un array di oggetti
// ogni oggetto rappresenta un gatto con nome, età, colore e sesso
// tramite forEach stampare tutti i gattini con colore e nome

const gatti = [
    {
        nome: 'Gervasio',
        eta: 12,
        colore: 'viola',
        sesso: 'maschio'
    },
    {
        nome: 'Duchessa',
        eta: 9,
        colore: 'bianco',
        sesso: 'femmina'
    },
    {
        nome: 'Oliver',
        eta: 11,
        colore: 'arancione',
        sesso: 'maschio'
    },
    {
        nome: 'Edgar',
        eta: 8,
        colore: 'marrone',
        sesso: 'maschio'
    },
    {
        nome: 'Pasquale',
        eta: 5,
        colore: 'verde',
        sesso: 'maschio'
    },
    {
        nome: 'Virgola',
        eta: 19,
        colore: 'blu',
        sesso: 'femmina'
    }
];

gatti.forEach((element) => {
    $('#milestoneUno').append(`<li>${element.nome} è di colore ${element.colore}</li>`)
});