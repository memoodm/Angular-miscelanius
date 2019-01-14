import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(
    _activatedRoute:ActivatedRoute
  ) {
    //tiene la palabra parent !!!
    _activatedRoute.parent.params.subscribe( params => {
      console.log("HIJA: ",params);
    })
  }

  ngOnInit() {
  }

}
