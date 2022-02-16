import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:string;
  passw:string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  loginUser(): void{
    if(this.user == 'SISTEMA' && this.passw == 'canditado123')
    this._router.navigate(['cadastrados'])
    else(
      alert('Usuario ou senha incorreto')
    )
  }

  ngOnInit() {
  }

}
