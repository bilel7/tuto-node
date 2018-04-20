"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseTable(table) {
    for (var i = 0; i < table.length; i++) {
        console.log("le code" + " " + table[i].code + " " + "a l'année" + " " + table[i].year);
    }
}
// TODO créer une fonction pour parser autrement
// TODO extraire les années dans un autre tableau à aficher dans le console tableYear
// todo crée un tableau des année 2018, 2019, 2020, 2021 => tableConstYear
// todo fait l'intersection pour extraire les year de tableYear non présent dans tableConstYear avec deux manières
var table = [
    { year: 2015, code: "an2015" },
    { year: 2016, code: "an2016" },
    { year: 2017, code: "an17" },
    { year: 2018, code: "an18" },
    { year: 2019, code: "an19" }
];
parseTable(table);
