import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantalla-usuarios',
  templateUrl: './pantalla-usuarios.component.html',
  styleUrls: ['./pantalla-usuarios.component.css']
})
export class PantallaUsuariosComponent implements OnInit {

  private paramId:number;

  constructor(
    _activatedRoute:ActivatedRoute
  ) {
    _activatedRoute.params.subscribe( params => {
      console.log("PADRE: ",params.id);
      this.paramId = params.id;
    })
  }

  ngOnInit() {
  }

}
