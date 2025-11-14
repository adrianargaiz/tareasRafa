//Facade
export class DomFacade {
  static crearTareaDom(tareas) {
    const visualizadorTareas = document.getElementById("visualizadorTareas");
    visualizadorTareas.innerHTML = "";

    if (!tareas || tareas.length === 0) {
      visualizadorTareas.innerHTML = "<p>No hay tareas para mostrar</p>";
      return;
    }

    for (const key in tareas) {
      let tar = tareas[key];
      let divTarea = document.createElement("div");
      divTarea.className = "tarea-card";
      divTarea.setAttribute("data-prioridad", tar.prioridad);

      divTarea.innerHTML = `
      <h3>${tar.titulo}</h3>
      <p><strong>Descripción:</strong> ${tar.descripcion}</p>
      <p><strong>Prioridad:</strong> ${tar.prioridad}</p>
      <p><strong>Fecha:</strong> ${tar.createdAt}</p>
      <p><strong>Estado:</strong> ${
        tar.done ? "✅ Completada" : "⏳ Pendiente"
      }</p>
      <label>
        <input type="checkbox" ${
          tar.done ? "checked" : ""
        } onchange="TaskManager.toggleEstado(${tar.id})">
        Completada
      </label>
    `;

      visualizadorTareas.appendChild(divTarea);
    }
  }
  static obtenerDatos() {
    const tituloTarea = document.getElementById("tituloTarea").value;
    const descripcionTarea = document.getElementById("descripcionTarea").value;
    const prioridadTarea = document.getElementById("prioridadTarea").value;

    return { tituloTarea, descripcionTarea, prioridadTarea };
  }
  static obtenerPrioridad() {
    const prioridadFiltro = document.getElementById("filtroPrioridad").value;
    return prioridadFiltro;
  }
  static obtenerEstado() {
    const estadoFiltro = document.getElementById("filtroEstado").value;
    return estadoFiltro;
  }
}
