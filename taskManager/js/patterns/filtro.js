export class Filtro {
  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  filtrar(tareas, valor) {
    if (!this.strategy) {
      return tareas;
    }
    return this.strategy.filtrar(tareas, valor);
  }
}

export class FiltrarPorPrioridad {
  filtrar(tareas, prioridad) {
    if (!tareas || tareas.length === 0) {
      return [];
    }
    return tareas.filter((tarea) => tarea.prioridad === prioridad);
  }
}

export class MostrarTodas {
  filtrar(tareas) {
    return tareas || [];
  }
}

export class FiltrarPorEstado {
  filtrar(tareas, estado) {
    if (!tareas || tareas.length === 0) {
      return [];
    }
    const estadoBool = estado === "completadas";
    return tareas.filter((tarea) => tarea.done === estadoBool);
  }
}
