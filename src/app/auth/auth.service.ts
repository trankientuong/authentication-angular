import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_KEY: string = 'AIzaSyB2iaMLilYMe_xk3tjTAieEqFxEW1shKrg';

  constructor(private httpClient: HttpClient) {}

  signup(email: string, password: string) {
    return this.httpClient
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((resError) => {
          let errorMessage = 'An unknown error occurred!';
          if (!resError.error || !resError.error.error) {
            return throwError(() => new Error(errorMessage));
          }
          switch (resError.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already';
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}
