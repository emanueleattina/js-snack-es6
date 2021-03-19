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

let etaMax = gatti[0];

for(let i = 0; i < gatti.length; i++) {
    if(gatti[i].eta > etaMax.eta) {
        etaMax = gatti[i];
    }
}

console.log("Età massima: " + etaMax.eta);

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



gatti.forEach((element) => {
    let nastro;
    let perc = ((element.eta * 100) / etaMax.eta) / 100;

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

// milestone 3
// crea un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio
// inserendo solo nome e colore e opacità del fiocco per ogni gatto

const arrGattiOrdinati = [...gattiFemmina, ...gattiMaschio];
console.log(arrGattiOrdinati);

arrGattiOrdinati.forEach((element) => {
    let nastro;
    let perc = ((element.eta * 100) / etaMax.eta) / 100;

    console.log(perc);

    if (element.sesso == 'maschio') {
        nastro = 'azzurro';
    }
    else if (element.sesso == 'femmina') {
        nastro = 'rosa';
    }
    $('#milestoneTre').append(`<li class="${nastro} list-none"><i class="fas fa-ribbon" style="opacity: ${perc}"></i>${element.nome} è di colore ${element.colore} con ${element.eta} anni</li>`);
});