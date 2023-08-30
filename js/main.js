let allClick = document.querySelector("#all");
let kantoClick = document.querySelector("#kanto");
let johtoClick = document.querySelector("#johto");
let hoennClick = document.querySelector("#hoenn");
let sinnohClick = document.querySelector("#sinnoh");
let unovaClick = document.querySelector("#unova");
let kalosClick = document.querySelector("#kalos");
let alolaClick = document.querySelector("#alola");
let galarClick = document.querySelector("#galar");
let hisuiClick = document.querySelector("#hisui");
let paldeaClick = document.querySelector("#paldea");
let allPokemon = document.querySelectorAll(".all");
let kantoPokemon = document.querySelectorAll(".kanto");
let johtoPokemon = document.querySelectorAll(".johto");
let hoennPokemon = document.querySelectorAll(".hoenn");
let sinnohPokemon = document.querySelectorAll(".sinnoh");
let unovaPokemon = document.querySelectorAll(".unova");
let kalosPokemon = document.querySelectorAll(".kalos");
let alolaPokemon = document.querySelectorAll(".alola");
let galarPokemon = document.querySelectorAll(".galar");
let hisuiPokemon = document.querySelectorAll(".hisui");
let paldeaPokemon = document.querySelectorAll(".paldea");

function displayAll() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    galarPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "list-item");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "list-item");
}

function displayKanto() {
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kantoPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displayJohto() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displayHoenn() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displaySinnoh() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displayUnova() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displayKalos() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displayAlola() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displayGalar() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displayHisui() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

function displayPaldea() {
    kantoPokemon.forEach(pokemon => pokemon.style.display = "none");
    johtoPokemon.forEach(pokemon => pokemon.style.display = "none");
    hoennPokemon.forEach(pokemon => pokemon.style.display = "none");
    sinnohPokemon.forEach(pokemon => pokemon.style.display = "none");
    unovaPokemon.forEach(pokemon => pokemon.style.display = "none");
    kalosPokemon.forEach(pokemon => pokemon.style.display = "none");
    alolaPokemon.forEach(pokemon => pokemon.style.display = "none");
    galarPokemon.forEach(pokemon => pokemon.style.display = "none");
    hisuiPokemon.forEach(pokemon => pokemon.style.display = "none");
    paldeaPokemon.forEach(pokemon => pokemon.style.display = "list-item");
};

allClick.addEventListener ('click', displayAll);
kantoClick.addEventListener ('click', displayKanto);
johtoClick.addEventListener ('click', displayJohto);
hoennClick.addEventListener ('click', displayHoenn);
sinnohClick.addEventListener ('click', displaySinnoh);
unovaClick.addEventListener ('click', displayUnova);
kalosClick.addEventListener ('click', displayKalos);
alolaClick.addEventListener ('click', displayAlola);
galarClick.addEventListener ('click', displayGalar);
hisuiClick.addEventListener ('click', displayHisui);
paldeaClick.addEventListener ('click', displayPaldea);