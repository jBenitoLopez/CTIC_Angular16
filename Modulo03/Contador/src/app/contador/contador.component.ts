import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
 @Input() valorContador = 0;
 @Output() eventoContador = new EventEmitter();

 incrementar():void {
  this.valorContador++;
  this.eventoContador.emit(this.valorContador);
 }
 decrementar():void {
  this.valorContador--;
  this.eventoContador.emit(this.valorContador);
 }

}

