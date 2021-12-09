import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CarrosService } from './../services/carros.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Carro } from '../model/carro';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss'],
})
export class CarrosComponent implements OnInit {
  public router: Router;
  public idForm: FormGroup;

  carros$: Observable<Carro[]>;
  displayedColumns = [
    'modelo',
    'marca',
    'quantidadePortas',
    'tipoCambio',
    'anoFabricado',
    'tipoCombustivel',
    'editar',
    'excluir',
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private carrosService: CarrosService,
    public dialog: MatDialog,
    router: Router,


  ) {
    this.router = router;
    this.carros$ = this.carrosService.listarTodos().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar carros cadastrados');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  irForm() {
    this.router.navigate(['/carros/form']);
  }

  onDelete(id: number) {
    this.carrosService.deleteCarro(id).subscribe();
    location.reload();
  }

  onEditar(id: number) {
    this.router.navigate(['form/editar/', id], { relativeTo: this.route });
  }

  buscarUm() {
    const { modelo } = this.idForm.value;
    this.carros$ = this.carrosService.listarPorModelo(modelo).pipe(
      catchError((error) => {
        this.onError('Erro ao carregar carros cadastrados');
        return of([]);
      })
    );
  }

  ngOnInit(): void {

    this.idForm = this.fb.group({
      modelo: [null, []],
    });
  }

  onSubmit() {

  }

  abrirAlertaDeletar(id:number){
    this.dialog.open(MatDialog);
  }
}



