import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable } from 'rxjs';
import { Carro } from './../model/carro';


@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private readonly API = 'https://localhost:5001/Carro/';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  listarTodos(){
    return this.httpClient.get<Carro[]>(this.API )
    .pipe(
      first(),
      delay(2),
    );

  }

  listarPorModelo(modelo: string){
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
       return this.httpClient.get<Carro[]>(this.API + modelo)
     .pipe(
       first(),
       delay(2),
     );

  }

  postCarro(carro: any): Observable<Carro>{
    carro.anoFabricado = Number(carro.anoFabricado)
    carro = JSON.stringify(carro)
    return this.httpClient.post<any>(this.API , carro , this.httpOptions);
  }

  deleteCarro(id:number){
    const url = `${this.API}${id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }

  editarCarro(id:number, carro:any){
    const url = `${this.API}${id}`;

    return this.httpClient.put(url, carro,this.httpOptions);
  }

  buscarPorId(id:number){
    const url = `${this.API}id/${id}`;
    return this.httpClient.get(url, this.httpOptions);
  }




}
