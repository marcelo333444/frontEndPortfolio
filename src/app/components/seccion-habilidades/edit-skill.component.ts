import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

 skill: Skills = null;

  constructor(private skillS: SkillsService,
              private activatedroute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.skillS.detail(id).subscribe( data => {
      this.skill = data;
    },err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(){
    const id = this.activatedroute.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(data => {
      alert("Se editó correctamente");
      this.router.navigate(['']);
    },err => {
      alert("Fallo al cargar habilidades");
      this.router.navigate(['']);
    })
  }
}
