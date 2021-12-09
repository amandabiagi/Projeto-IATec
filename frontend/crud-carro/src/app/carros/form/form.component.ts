
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CarrosService } from '../services/carros.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public router: Router;
  public carroForm: FormGroup;


  constructor(private fb: FormBuilder,
              private carrosService: CarrosService,
              router: Router) {
    this.router=router;
  }

  ngOnInit(): void {
    this.carroForm = this.fb.group({
      modelo: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      quantidadePortas: [null, [Validators.required]],
      tipoCambio: [null, [Validators.required]],
      anoFabricado: [null, [Validators.required]],
      tipoCombustivel: [null, [Validators.required]],
    });

  }

  onSubmit() {
    this.carrosService.postCarro(this.carroForm.value).subscribe();
    this.onRedirect();
  }

  onRedirect(){
      this.router.navigate(['/','carros'])
  }

}
