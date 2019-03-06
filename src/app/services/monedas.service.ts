import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MonedasService {
private url = 'http://localhost:8002/cotizaciones/todas';
constructor(private http: HttpClient) {
console.log('Servicio de monedas listo para usar!!!');
}
// Returns Observable<Moneda[]>
getMonedas(): Observable<Moneda[]> {
    return this.http.get<Moneda[]>(this.url);
    }
}

export interface Moneda {
    moneda: string;
    precio: string;
}
