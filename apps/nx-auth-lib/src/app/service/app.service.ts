import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../types';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    apiUrl = 'http://localhost:3333/api';

    serviceUrls = {
        messageUrl: this.apiUrl + '/welcome'
    };

    constructor(private httpClient: HttpClient) {}

    getMessage() {
        return this.httpClient.get(this.serviceUrls.messageUrl);
    }
}
