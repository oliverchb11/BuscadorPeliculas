import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ImagenesI } from "../models/imagenesAPI";
import { Observable } from "rxjs";
import { Url } from "url";

@Injectable({
  providedIn: "root",
})
export class ImagenesService {
  private rutaprincipal = "https://api.themoviedb.org/3/discover/";
  private apikey = "f6aa14cdd8de77b073ab81ed80e212b5";
  public: ImagenesI;
  filterPost = "";
  constructor(private http: HttpClient) {}

  // el return siempre retorna un observable para poder suscribirnos
  getAllImagenesId(): Observable<ImagenesI> {
    const url = `${this.rutaprincipal}movie?sort_by=popularity.desc&api_key=${this.apikey} `;
    return this.http.get<ImagenesI>(url);
  }
  getAllImagenesId2(): Observable<ImagenesI> {
    const url = `${this.rutaprincipal}tv?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${this.apikey} `;
    return this.http.get<ImagenesI>(url);
  }
}
