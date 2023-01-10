import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {

persona: Persona = null;

  constructor(private activateRouter: ActivatedRoute,
              private personaService: PersonaService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data => {
      this.persona = data;
    },err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
     const id = this.activateRouter.snapshot.params['id'];
     this.personaService.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
     },err => {
      alert("Error al modificar");
      this.router.navigate(['']);
     })
  }

  uploadImage($event: any){}
}
