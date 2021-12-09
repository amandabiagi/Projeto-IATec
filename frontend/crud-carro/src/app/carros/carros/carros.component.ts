import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CarrosService } from './../services/carros.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../model/carro';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

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
    router: Router
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

  buscarUm(modelo: string) {
    this.carrosService.listarPorId(modelo);
  }

  ngOnInit(): void {
    this.idForm = this.fb.group({
      id: [null, []],
    });
  }

  onSubmit() {
    const { id } = this.idForm.value;
    console.log(id);
    this.carros$ = this.carrosService.listarPorId(id).pipe(
      catchError((error) => {
        this.onError('Erro ao carregar carros cadastrados');
        return of([]);
      })
    );
  }
}
