export class Tarea {
  constructor(titulo, descripcion, prioridad) {
    this.id = Date.now();
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.prioridad = prioridad;
    this.done = false;
    this.createdAt = new Date().toLocaleDateString();
  }
}
