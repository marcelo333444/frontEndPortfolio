import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//inicio service
import { CargarScriptsService } from './cargar-scripts.service';
//fin service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { SeccionSobreMiComponent } from './components/seccion-sobre-mi/seccion-sobre-mi.component';
import { SeccionServiciosComponent } from './components/seccion-servicios/seccion-servicios.component';
import { SeccionHabilidadesComponent } from './components/seccion-habilidades/seccion-habilidades.component';
import { SeccionPortafolioComponent } from './components/seccion-portafolio/seccion-portafolio.component';
import { SeccionContactoComponent } from './components/seccion-contacto/seccion-contacto.component';
import { SeccionFooterComponent } from './components/seccion-footer/seccion-footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './components/seccion-sobre-mi/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/seccion-sobre-mi/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/seccion-sobre-mi/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/seccion-sobre-mi/educacion/educacion.component';
import { NeweducacionComponent } from './components/seccion-sobre-mi/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/seccion-sobre-mi/educacion/editeducacion.component';
import { EditSkillComponent } from './components/seccion-habilidades/edit-skill.component';
import { NewSkillComponent } from './components/seccion-habilidades/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditacercadeComponent } from './components/barra-navegacion/editacercade.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    SeccionSobreMiComponent,
    SeccionServiciosComponent,
    SeccionHabilidadesComponent,
    SeccionPortafolioComponent,
    SeccionContactoComponent,
    SeccionFooterComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditacercadeComponent
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [CargarScriptsService,
              interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
