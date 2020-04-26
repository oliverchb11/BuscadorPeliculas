import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  formularioRegistro: FormGroup;
  constructor(private validadorFormulario: FormBuilder) {}

  ngOnInit(): void {
    this.formularioRegistro = this.validadorFormulario.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      usuario: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
      confirmPW: ["", Validators.required],
    });
  }
}
