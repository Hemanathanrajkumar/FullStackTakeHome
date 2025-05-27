import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class HttpBaseService {
  
  httpClient!: HttpClient;

  constructor(private injector: Injector) {
    this.httpClient = this.injector.get(HttpClient)
  }

  _get(uri: string): Observable<any> {
    const url = this._getFullUrl(uri);
    return this.httpClient.get(url);
  }

  _getFullUrl(uri: string) {
    const url = `${environment.baseURL}/${uri}`;
    return uri
  }
}
