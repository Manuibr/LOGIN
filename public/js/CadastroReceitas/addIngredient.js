import { Ajax } from "../ajax.js";

const addIngredientButton = document.querySelector("#add-ingredient");
const ingredientsList = document.querySelector("#ingredients-list");

showIngredients();

addIngredientButton.addEventListener('click', () => {
    ingredientsList.innerHTML += `
    <div class='ingredient-name border border-secondary d-flex mt-2'>
        <div class='w-100'>
            <input type='text' class='p-2 h-100 w-100 fs-4' id="input-ingredient" placeholder='Nome do ingrediente' autocomplete='off'/>
        </div>
        <div class='dropdown'>
            <button class='btn dropdown-toggle p-2 me-2' type='button' id='ingredient-controls' data-bs-toggle='dropdown' aria-expanded='false'>
                <i class='fas fa-ellipsis-v fa-2x'></i>
            </button>
            <ul class='dropdown-menu' aria-labelledby='ingredient-controls'>
                <li><a class='dropdown-item p-2' href='#'><i class='fas fa-minus fa-1x me-2'></i>Remover ingrediente</a></li>
                <li><a class='dropdown-item p-2' href='#'><i class='fas fa-pen fa-1x me-2'></i>Editar ingrediente</a></li>
            </ul>
        </div>
    </div>`
    
    var currentInputIngredient = document.querySelector("#input-ingredient");

    currentInputIngredient.addEventListener('keydown', (event) => {
        if(event.key === 'Enter') {
            var inputIngredientText = currentInputIngredient.value;

            addIngredient(inputIngredientText);
        }
    })
})


function addIngredient(inputIngredientText) {
    let userData = inputIngredientText;
    let getLocalStorage = localStorage.getItem("receitas");
    if(getLocalStorage == null ) {
        var listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("receitas", JSON.stringify(listArr));
    showIngredients();
}

function showIngredients() {
    let getLocalStorage = localStorage.getItem("receitas");
    if(getLocalStorage == null ) {
        var listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `
            <div id="ingredient-name-submited" class="border border-secondary d-flex mt-2">  
            <div class="w-100">
              <p class="p-2 h-100 w-100 fs-4" id="ingredient-name">${element}</p>
            </div>
          
            <div class="dropdown">
              <button class="btn dropdown-toggle p-2 me-2" type="button" id="ingredient-controls" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-2x"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="ingredient-controls">
                <li><a class="dropdown-item p-2" href="#"><i class="fas fa-minus fa-1x me-2"></i>Remover ingrediente</a></li>
                <li><a class="dropdown-item p-2" href="#"><i class="fas fa-pen fa-1x me-2"></i>Editar ingrediente</a></li>
              </ul>
            </div>
          </div>`;
    });
    ingredientsList.innerHTML = newLiTag;
}