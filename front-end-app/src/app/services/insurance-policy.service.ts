import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePolicyModel } from '../models/insurance-policy.model';
import { HttpBaseService } from './http-base.service';

@Injectable({
  providedIn: 'root'
})
export class InsurancePolicyService extends HttpBaseService {

  url = 'insurance-policy'

  constructor(injector: Injector) {
    super(injector)
  }

  getInsurancePolicyData(pathParams?: any): Observable<InsurancePolicyModel[]> {
    const observable = new Observable<InsurancePolicyModel[]>((subscriber: any) => {
      let url = this.url;
      if(pathParams) {
        url = `${url}?${pathParams}`
      }
      this._get(url).subscribe((data: any) => {
        subscriber.next(data);
      }, (error: any) => {
        subscriber.error(error);
      })
    })
    return observable;
  }

}
