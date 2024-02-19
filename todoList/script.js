const form = document.querySelector('form');

//storage
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodo () {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquer sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodo);
// add element
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(item.value);


  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
})
// remove element
list.addEventListener("click", (e) => {
  if (e.target.classList.contains('checked')) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
})


