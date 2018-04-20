
import {Exercice} from './Exercice';

function parseTable(table: Exercice[]){

    for (let i = 0; i < table.length; i++) {
        console.log("le code" + " " + table[i].code + " " + "a l'année" + " " + table[i].year)
    }
}

// TODO créer une fonction pour parser autrement

// TODO extraire les années dans un autre tableau à aficher dans le console tableYear


// todo crée un tableau des année 2018, 2019, 2020, 2021 => tableConstYear

// todo fait l'intersection pour extraire les year de tableYear non présent dans tableConstYear avec deux manières



let table = [
    {year: 2015, code: "an2015"}  as Exercice,
    {year: 2016, code: "an2016"}  as Exercice,
    {year: 2017, code: "an17"}  as Exercice,
    {year: 2018, code: "an18"}  as Exercice,
    {year: 2019, code: "an19"}  as Exercice
];

parseTable(table);

