var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");
var filtro = document.getElementById("filtro");

form.addEventListener("submit", agregarItem);

lista.addEventListener("click", eliminarItem);

filtro.addEventListener("keyup", filtrarItems);

function agregarItem(e) {
    e.preventDefault();
    var newItem = document.getElementById("Item").value;

    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement("button");
    botonDel.className = "btn btn-danger btn-sm float-right eliminar";
    botonDel.appendChild(document.createTextNode("X"));

    li.appendChild(botonDel);

    lista.appendChild(li);
}

function eliminarItem(e) {
    if (e.target.classList.contains("eliminar")) {
        if (confirm("¿Seguro que desea elminiar el elemento?")) {
            var li = e.target.parentElement;
            lista.removeChild(li);
        }
    }
}

function filtrarItems(e) {
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName("li");
    Array.from(items).forEach(function(item) {
        var itemNombre = item.firstChild.textContent;
        if (itemNombre.toLowerCase().indexOf(texto) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}