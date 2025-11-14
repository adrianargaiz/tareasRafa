export class Almacenamiento {
  static eliminar() {}
  static obtener() {
    return JSON.parse(localStorage.getItem("tareas"));
  }
  static addLocalStorage(tarea) {
    let tareas = this.obtener() || [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }
}
