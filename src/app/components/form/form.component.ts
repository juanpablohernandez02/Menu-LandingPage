import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  contenidoOculto = false;
  respuestasMarcadas1 = false;
  respuestasMarcadas2 = false;
  respuestasMarcadas = false;

  toggleContent(): void {
    this.contenidoOculto = !this.contenidoOculto;
  }

  comprobarRespuestas(): void {
    alert('Comprobando respuestas...');
  }

  checkRespuestas1(): void {
    this.respuestasMarcadas1 = true;
    this.checkRespuestas();
  }

  checkRespuestas2(): void {
    this.respuestasMarcadas2 = true;
    this.checkRespuestas();
  }

  private checkRespuestas(): void {
    this.respuestasMarcadas = this.respuestasMarcadas1 && this.respuestasMarcadas2;
  }
}
