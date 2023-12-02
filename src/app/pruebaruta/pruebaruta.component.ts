import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pruebaruta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pruebaruta.component.html',
  styleUrl: './pruebaruta.component.css'
})
export class PruebarutaComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    window.open('https://google.com','_blank')
  }
  
  ngOnInit(): void {
    this.name();
  }

  //declaracion global
  numero: number = 8;
  texto?: string;
  esVerdadero: boolean | undefined;
  CualquierCosa: any;
  listadenumeros?: number[];
  dia? : string;

  name() {
    //variables de la funcion
    var numero: number;
    if (this.numero) {
      numero = this.numero;
    }
    var texto: string;
    var esVerdadero: boolean;
    let listadenumeros: number[];
    let hoy: string = diasdelasemana.Sabado;
    this.dia = hoy;
    console.log(hoy);
  }
}

enum diasdelasemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Miercoles",
  Viernes ="Jueves",
  Sabado = "Sabado",
  Domingo= "Domingo"
}
