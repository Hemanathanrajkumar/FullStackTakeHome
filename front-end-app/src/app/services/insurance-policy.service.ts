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

  getInsurancePolicyData(): Observable<InsurancePolicyModel[]> {
    const observable = new Observable<InsurancePolicyModel[]>((subscriber: any) => {
      this._get(this.url).subscribe((data: any) => {
        subscriber.next(data);
      }, (error: any) => {
        subscriber.error(error);
      })
    })
    return observable;
  }

}
