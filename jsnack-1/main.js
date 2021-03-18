$(document).ready(function () {
    
    // Creare un array di oggetti:
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

    const bici = [
        {
            nome: "bmx",
            peso: 7
        },
        {
            nome: "graziella",
            peso: 3
        },
        {
            nome: "mountain bike",
            peso: 12
        },
        {
            nome: "city bike",
            peso: 11
        },
    ];

    let leggera = bici[0];

    for(let i = 0; i < bici.length; i++) {
        if(bici[i].peso < leggera.peso) {
            leggera = bici[i];
        }
    }

    console.log(leggera);

    const {peso, nome} = leggera;
    document.getElementById('container').innerHTML =
    `<ul>
        <li>Nome: ${nome}</li>
        <li>Peso: ${peso}</li>
    </ul>`;
    


});

