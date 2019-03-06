import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MonedasService, Moneda} from '../../services/monedas.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {
monedas: Observable<Moneda[]>;
  constructor(private http: HttpClient, private _monedasService: MonedasService ) {
    console.log('constructor');
    setInterval(() => {
      this.monedas = this._monedasService.getMonedas();
      console.log(this.monedas);
      }, 5000);
  }

  ngOnInit(): void {
    this.monedas = this._monedasService.getMonedas();
    console.log(this.monedas);

     

  }

}
