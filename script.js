function agregarTarea() {
    const input = document.getElementById("tarea");
    const lista = document.getElementById("lista");

    if (input.value.trim() === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = function() {
        this.remove();
        alert("TAREA ELIMINADA"); 
    };

    lista.appendChild(li);
    input.value = "";

    console.log("Tarea agregada con éxito");
}