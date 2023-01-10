import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-seccion-contacto',
  templateUrl: './seccion-contacto.component.html',
  styleUrls: ['./seccion-contacto.component.css']
})
export class SeccionContactoComponent implements OnInit {

  constructor(private _CargarScripts: CargarScriptsService) {
    _CargarScripts.cargar(["app_contacto"]);
  }

  ngOnInit(): void {
  }

}
