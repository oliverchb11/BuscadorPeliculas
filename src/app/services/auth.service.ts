import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { JwtResponse } from "../models/jwt-response";
import { tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  AUT_SERVER: string = "http://localhost:3000";
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private Us: User, private httpClient: HttpClient) {}

  register(user: User): Observable<JwtResponse> {
    return this.httpClient
      .post<JwtResponse>(`${this.AUT_SERVER}/register`, user)
      .pipe(
        tap((res: JwtResponse) => {
          if (res) {
            this.saveToken(res.dateUser.accesToken, res.dateUser.expiresIn);
          }
        })
      );
  }
  login(user: User): Observable<JwtResponse> {
    return this.httpClient
      .post<JwtResponse>(`${this.AUT_SERVER}/login`, user)
      .pipe(
        tap((res: JwtResponse) => {
          if (res) {
            this.saveToken(res.dateUser.accesToken, res.dateUser.expiresIn);
          }
        })
      );
  }

  logout() {
    this.token = "";
    localStorage.removeItem("ACCES_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }
  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCES_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCES_TOKEN");
    }
    return this.token;
  }
}
