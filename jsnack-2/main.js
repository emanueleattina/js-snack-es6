$(document).ready(function () {
    
    // Creare un array di oggetti di squadre di calcio.
    // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    const squadre = [
        {
            nome: "Casorezzo",
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: "Ossona",
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: "Arluno",
            puntiFatti: 0,
            falliSubiti: 0
        },
    ]

    // Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
    for(let i = 0; i < squadre.length; i++) {
        squadre[i].puntiFatti = numRandom(0, 100);
        squadre[i].falliSubiti = numRandom(0, 30);
    }
    
    console.log(squadre);
    
    // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
    const arrSquadre = [];
    
    for(let i = 0; i < squadre.length; i++) {
        const thisSquadra = squadre[i];
        
        const {nome, falliSubiti} = thisSquadra;
        
        arrSquadre.push({nome, falliSubiti});
        
        
    }

    // stampo
    for(let i = 0; i < squadre.length; i++) {
        const thisSquadra = squadre[i];

        document.getElementById('container' + (i)).innerHTML = 
        `<ul>
            <li>Squadra: ${thisSquadra.nome}</li>
            <li>Falli subiti: ${thisSquadra.falliSubiti}</li>
        </ul>
        `
    }
});

function numRandom(min, max) {
    var numRandom = Math.floor((Math.random() * max) + min);
    return numRandom;
}