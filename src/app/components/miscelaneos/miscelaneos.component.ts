import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscelaneos',
  templateUrl: './miscelaneos.component.html',
  styleUrls: ['./miscelaneos.component.css']
})
export class MiscelaneosComponent implements OnInit {

  ngOnInit(): void {

  }
  
  private tamanio:number = 10;
  private colorSelector:boolean = false;

  private stylePrimary:boolean = true;
  private styleSecondary:boolean = false;
  private styleSuccess:boolean = false;
  private styleDanger:boolean = false;
  private styleWarning:boolean = false;
  private styleInfo:boolean = false;

  private variableAlerta:string = "alert-primary";

  private loadingService:boolean = false;

  private alertaNgSwitch:string = "default value";

  botonUP(){
    this.tamanio+=5;
  }
  botonDOWN(){
    this.tamanio-=5;
  }
  changeAlertClass(input:string){
    switch(input){
      case 'primary':
        this.stylePrimary = true;
        this.styleSecondary = false;
        this.styleSuccess = false;
        this.styleDanger = false;
        this.styleWarning = false;
        this.styleInfo = false;
      break;
      case 'secondary':
        this.stylePrimary = false;
        this.styleSecondary = true;
        this.styleSuccess = false;
        this.styleDanger = false;
        this.styleWarning = false;
        this.styleInfo = false;
      break;
      case 'success':
        this.stylePrimary = false;
        this.styleSecondary = false;
        this.styleSuccess = true;
        this.styleDanger = false;
        this.styleWarning = false;
        this.styleInfo = false;
      break;
      case 'danger':
        this.stylePrimary = false;
        this.styleSecondary = false;
        this.styleSuccess = false;
        this.styleDanger = true;
        this.styleWarning = false;
        this.styleInfo = false;
      break;
      case 'warning':
        this.stylePrimary = false;
        this.styleSecondary = false;
        this.styleSuccess = false;
        this.styleDanger = false;
        this.styleWarning = true;
        this.styleInfo = false;
      break;
      case 'info':
        this.stylePrimary = false;
        this.styleSecondary = false;
        this.styleSuccess = false;
        this.styleDanger = false;
        this.styleWarning = false;
        this.styleInfo = true;
      break;
    }
  }

  seleccionaValorSwitch(valor:string){
    console.log(valor);
    this.alertaNgSwitch = valor;
  }
}
