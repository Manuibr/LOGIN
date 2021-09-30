import { Ajax } from "./ajax.js";

const ajax = new Ajax();

let inputSearch = document.querySelector('#search-input');
let result = document.querySelector("#search-response");
let searchList = document.querySelector("#search-list");

searchList.innerHTML = "<h3>Pesquise para poder encontrar resultados!</h3>";

inputSearch.addEventListener('focus', () => {
    result.classList.toggle("d-none");
})

inputSearch.addEventListener('focusout', () => {
    result.classList.toggle("d-none");
})

inputSearch.addEventListener('keyup', () => {
    console.log(`InputSearch: ${inputSearch.value}`)
    if(inputSearch.value == "") {
        searchList.innerHTML = "<h3>Pesquise para poder encontrar resultados!</h3>";
    } else {
        getSearch(inputSearch.value, searchList)
    }
})


function getSearch(inputSearch, searchList) {
    console.log(`InputSearch dentro da função: ${inputSearch}`);
    try {
        ajax.requisitar(inputSearch, searchList);
    } catch(err) {
        console.log(`Um erro inesperado ocorreu! ${err.getMessage()}`);
    }    
}