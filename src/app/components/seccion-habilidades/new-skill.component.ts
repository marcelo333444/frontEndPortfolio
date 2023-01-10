import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillsService,
              private router: Router) { }

  ngOnInit(): void {
  }
 
  onCreate(): void{
  const skill = new Skills(this.nombre, this.porcentaje);
  this.skillS.save(skill).subscribe(data => {
    alert("Habilidad creada correctamente");
    this.router.navigate(['']);
  },err => {
    alert("Fallo añadir Habilidad");
    this.router.navigate(['']);
  })
  }
}
