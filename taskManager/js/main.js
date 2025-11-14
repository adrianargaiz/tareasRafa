import { TaskManager } from "./patterns/taskManager.js";

const crearTarea = document.getElementById("crearTarea");
const filtroPrioridad = document.getElementById("filtroPrioridad");
const filtroEstado = document.getElementById("filtroEstado");

crearTarea.addEventListener("click", TaskManager.crearTarea);
document.addEventListener("DOMContentLoaded", TaskManager.renderTarea);
filtroPrioridad.addEventListener("change", TaskManager.filtrarTarea);
filtroEstado.addEventListener("change", TaskManager.filtrarPorEstado);
window.TaskManager = TaskManager;
