import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {
dolar;
euro;
real;

  constructor(private http: HttpClient ) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8001/COTIZACION/dolar').subscribe( (resp: any) => {
      this.dolar = resp;
    });

    setInterval(() => {
      this.http.get('http://localhost:8001/COTIZACION/dolar').subscribe( (resp: any) => {
        this.dolar = resp;
    });
     }, 5000);

    this.http.get('http://localhost:8001/COTIZACION/euro').subscribe( (resp: any) => {
      this.euro = resp;
    });

    setInterval(() => {
      this.http.get('http://localhost:8001/COTIZACION/euro').subscribe( (resp: any) => {
        this.euro = resp;
      });
    }, 5000);

    this.http.get('http://localhost:8001/COTIZACION/real').subscribe( (resp: any) => {
      this.real = resp;
    });
    setInterval(() => {
      this.http.get('http://localhost:8001/COTIZACION/real').subscribe( (resp: any) => {
        this.real = resp;
    });
    }, 5000);
  }

}
