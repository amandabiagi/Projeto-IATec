import { Carro } from './../model/carro';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarrosService } from '../services/carros.service';

@Component({
  selector: 'app-form',
  templateUrl: './formEditar.component.html',
  styleUrls: ['./formEditar.component.scss'],
})
export class FormEditarComponent implements OnInit {
  public router: Router;
  public carroFormEditar: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private carrosService: CarrosService,
    router: Router
  ) {
    this.router = router;
  }

  ngOnInit(): void {
  this.route.params.subscribe(
  (params:any)=>{
    const id = params["id"];
    const carro$ = this.carrosService.buscarPorId(id);
    carro$.subscribe(carro =>{
      this.formAtualizar(carro);

    })
  }
)

    this.carroFormEditar = this.fb.group({
      modelo: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      quantidadePortas: [null, [Validators.required]],
      tipoCambio: [null, [Validators.required]],
      anoFabricado: [null, [Validators.required]],
      tipoCombustivel: [null, [Validators.required]],
    });
  }

  onRedirect() {
    this.router.navigate(['/', 'carros']);
  }

  formAtualizar(carro:any){
    this.carroFormEditar.patchValue({
      modelo: carro.modelo,
      marca: carro.marca,
      quantidadePortas: carro.quantidadePortas,
      tipoCambio: carro.tipoCambio,
      anoFabricado: carro.anoFabricado,
      tipoCombustivel: carro.tipoCombustivel
    })
  }

  atualizar(){
    let id:number = 0;
    this.route.params.subscribe(

      (params:any)=>{
        id = params["id"];

      }
    )
  this.carrosService.editarCarro(id, this.carroFormEditar.value).subscribe();
  this.onRedirect();
  }
}
