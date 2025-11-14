import { DomFacade } from "../domFacade.js";
import { Tarea } from "../models/tarea.js";
import { Almacenamiento } from "../storage/localStorage.js";
import {
  Filtro,
  FiltrarPorPrioridad,
  FiltrarPorEstado,
  MostrarTodas,
} from "./filtro.js";

export class TaskManager {
  static crearTarea(event) {
    event.preventDefault();

    const errores = [];
    const datosTarea = DomFacade.obtenerDatos();

    if (datosTarea.tituloTarea === "") {
      errores.push("El titulo no puede estar vacio");
    }
    if (datosTarea.descripcionTarea === "") {
      errores.push("La descripcion no puede estar vacia");
    }
    if (errores.length === 0) {
      const tarea = new Tarea(
        datosTarea.tituloTarea,
        datosTarea.descripcionTarea,
        datosTarea.prioridadTarea
      );
      Almacenamiento.addLocalStorage(tarea);
      TaskManager.renderTarea();
    }
  }

  static renderTarea() {
    DomFacade.crearTareaDom(Almacenamiento.obtener());
  }

  static filtrarPorPrioridad() {
    const prioridad = DomFacade.obtenerPrioridad();
    const todasLasTareas = Almacenamiento.obtener();

    const filtro = new Filtro();

    if (prioridad === "todas" || prioridad === "") {
      filtro.setStrategy(new MostrarTodas());
      DomFacade.crearTareaDom(filtro.filtrar(todasLasTareas));
    } else {
      filtro.setStrategy(new FiltrarPorPrioridad());
      DomFacade.crearTareaDom(filtro.filtrar(todasLasTareas, prioridad));
    }
  }

  static filtrarPorEstado() {
    const estado = DomFacade.obtenerEstado();
    const todasLasTareas = Almacenamiento.obtener();

    const filtro = new Filtro();

    if (estado === "todas" || estado === "") {
      filtro.setStrategy(new MostrarTodas());
      DomFacade.crearTareaDom(filtro.filtrar(todasLasTareas));
    } else {
      filtro.setStrategy(new FiltrarPorEstado());
      DomFacade.crearTareaDom(filtro.filtrar(todasLasTareas, estado));
    }
  }
  static toggleEstado(id) {
    const tareas = Almacenamiento.obtener();
    const tarea = tareas.find((t) => t.id === id);

    if (tarea) {
      tarea.done = !tarea.done;
      localStorage.setItem("tareas", JSON.stringify(tareas));
      TaskManager.renderTarea();
    }
  }
}
