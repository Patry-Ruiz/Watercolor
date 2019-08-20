import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {
  Anio: number = new Date().getFullYear()
  constructor() { }

  ngOnInit() {
  }

}
