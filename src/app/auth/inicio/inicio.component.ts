import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "angularfire2/firestore";
import { Imagenes } from "src/app/models/imagenes";
import { ImagenesService } from "src/app/services/imagenes.service";
import { ImagenesI } from "src/app/models/imagenesAPI";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
})
export class InicioComponent implements OnInit {
  nombrePelicula: any[] = [];
  nombreTv: any[] = [];
  imagenPelicula: string;

  constructor(
    private db: AngularFirestore,
    private imgServicio: ImagenesService,
    private http: HttpClient
  ) {}
  filterPost = "";

  ngOnInit(): void {
    this.imgServicio.getAllImagenesId().subscribe((data) => {
      this.nombrePelicula = data["results"];
    });
    this.imgServicio.getAllImagenesId2().subscribe((data2) => {
      this.nombreTv = data2["results"];
    });
  }

  // getAllPeliculas() {
  //   this.imgServicio.getAllImagenesId().subscribe((resultado) => {
  //     for (var i = 0; i < resultado.results.length; i++) {
  //       // console.log(resultado.results[i].original_title);
  //       this.nombrePelicula = resultado.results[i].original_title;
  //       console.log(this.nombrePelicula);
  //     }
  //   });
  // }

  BuscarClientes(clienteBuscar) {}
}
