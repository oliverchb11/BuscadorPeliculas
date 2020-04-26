import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { InicioComponent } from "./auth/inicio/inicio.component";
import { HeaderComponent } from "./auth/header/header.component";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireModule, FirebaseOptionsToken } from "angularfire2";

import { environment } from "src/environments/environment";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { StoreModule } from "@ngrx/store";
import { ImagenesService } from "./services/imagenes.service";
import { PeliculasComponent } from './auth/peliculas/peliculas.component';
import { PipesImgPipe } from './pipes/pipes-img.pipe';
import { SeriesPipe } from './pipes/series.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    HeaderComponent,
    PeliculasComponent,
    PipesImgPipe,
    SeriesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    StoreModule.forRoot({}),
    HttpClientModule,
  ],
  providers: [AngularFirestore, AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
