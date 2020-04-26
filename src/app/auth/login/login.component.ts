import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  constructor(private validadorFormulario: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.validadorFormulario.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
}
