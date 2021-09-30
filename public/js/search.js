import { Ajax } from "./ajax.js";

const ajax = new Ajax();

function getSearch(inputSearch, result) {
    console.log(`InputSearch dentro da função: ${inputSearch}`);
    try {
        ajax.requisitar(inputSearch, result);
    } catch(err) {
        console.log(`Um erro inesperado ocorreu! ${err.getMessagem()}`);
    }    
}
