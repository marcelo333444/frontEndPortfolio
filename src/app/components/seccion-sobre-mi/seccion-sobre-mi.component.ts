
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { SwitchService } from 'src/app/switch.service';


@Component({
  selector: 'app-seccion-sobre-mi',
  templateUrl: './seccion-sobre-mi.component.html',
  styleUrls: ['./seccion-sobre-mi.component.css']
})
export class SeccionSobreMiComponent implements OnInit {

  

  hideUpdate: boolean = true;

  isLogged = false;

  constructor(private router: Router, 
              private tokenService: TokenService,
              ) {

  }

  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }
 
}
