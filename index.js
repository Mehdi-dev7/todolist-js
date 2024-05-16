// creer un form en html

// Ajouter sur le dom ce qui est tapé dans l input à la validation du form monInput.value
const form = document.querySelector("form");

function storeList() {
  window.localStorage.todoList = list.innerHTML;
}
function getTodos() {
  window.localStorage.todoList
    ? (list.innerHTML = window.localStorage.todoList)
    : (list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`);
}

window.addEventListener("load", getTodos);

// Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//Supprimer un todo lorsque l on click dessus (.remove())

list.addEventListener("click", (e) => {
  e.target.classList.contains("checked")
    ? e.target.remove()
    : e.target.classList.add("checked");
  storeList();
});

// Stocker dans la local storage la liste
// Consulter le local storage au lancement de l application pour rajouter les todos
