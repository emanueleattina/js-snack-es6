// milestone 1
// definire un array di oggetti
// ogni oggetto rappresenta un gatto con nome, età, colore e sesso
// tramite forEach stampare tutti i gattini con colore e nome

const gatti = [
    {
        nome: 'Gervasio',
        eta: numRandom(1, 20),
        colore: 'viola',
        sesso: 'maschio'
    },
    {
        nome: 'Duchessa',
        eta: numRandom(1, 20),
        colore: 'bianco',
        sesso: 'femmina'
    },
    {
        nome: 'Oliver',
        eta: numRandom(1, 20),
        colore: 'arancione',
        sesso: 'maschio'
    },
    {
        nome: 'Edgar',
        eta: numRandom(1, 20),
        colore: 'marrone',
        sesso: 'maschio'
    },
    {
        nome: 'Pasquale',
        eta: numRandom(1, 20),
        colore: 'verde',
        sesso: 'maschio'
    },
    {
        nome: 'Virgola',
        eta: numRandom(1, 20),
        colore: 'blu',
        sesso: 'femmina'
    }
];

console.log(gatti);

gatti.forEach((element) => {
    $('#milestoneUno').append(`<li>${element.nome} è di colore ${element.colore}</li>`)
});

// milestone 2
// dividere i gatti in due array in base al sesso
// aggiungere a fianco di ogni gatto un fiocco colorato
// rosa se femmina, azzurro se maschio
// il fiocco deve essere più trasparente se giovane, meno trasparente se vecchio

const gattiMaschio = gatti.filter((element) => element.sesso == 'maschio');
const gattiFemmina = gatti.filter((element) => element.sesso == 'femmina');

let etaMax = gatti[0];

for(let i = 0; i < gatti.length; i++) {
    if(gatti[i].eta > etaMax.eta) {
        etaMax = gatti[i].eta;
    }
}

console.log(etaMax);

gatti.forEach((element) => {
    let nastro;
    let perc = (element.eta * 1) / etaMax;

    console.log(perc);

    if (element.sesso == 'maschio') {
        nastro = 'azzurro';
    }
    else if (element.sesso == 'femmina') {
        nastro = 'rosa';
    }
    $('#milestoneDue').append(`<li class="${nastro} list-none"><i class="fas fa-ribbon" style="opacity: ${perc}"></i>${element.nome} è di colore ${element.colore} con ${element.eta} anni</li>`);
});

function numRandom(min, max) {
    var numRandom = Math.floor((Math.random() * max) + min);
    return numRandom;
}