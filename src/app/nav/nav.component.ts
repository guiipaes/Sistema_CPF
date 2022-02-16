import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  homme(): void{ this._router.navigate(['dashboard'])}

  cads(): void{this._router.navigate(['cadastrados'])}

  ngOnInit() {
  }

}
