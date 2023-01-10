import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './components/barra-navegacion/editacercade.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditSkillComponent } from './components/seccion-habilidades/edit-skill.component';
import { NewSkillComponent } from './components/seccion-habilidades/new-skill.component';
import { EditeducacionComponent } from './components/seccion-sobre-mi/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/seccion-sobre-mi/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/seccion-sobre-mi/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/seccion-sobre-mi/experiencia/new-experiencia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editkill/:id', component: EditSkillComponent},
  {path: 'editacercade/:id', component: EditacercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
