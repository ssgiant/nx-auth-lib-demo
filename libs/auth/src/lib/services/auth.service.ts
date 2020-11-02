import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../types';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiUrl = 'http://localhost:3333/api';

    serviceUrls = {
        loginUrl: this.apiUrl + '/login'
    };

    constructor(private httpClient: HttpClient) {}

    login(credentials: Credentials) {
        return this.httpClient.post(this.serviceUrls.loginUrl, credentials);
    }
}
