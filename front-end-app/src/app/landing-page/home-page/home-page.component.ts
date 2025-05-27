import { Component } from '@angular/core';
import { InsurancePolicyModel } from 'src/app/models/insurance-policy.model';
import { InsurancePolicyService } from 'src/app/services/insurance-policy.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  insuranceData!: InsurancePolicyModel[];
  columns: any[] = [];

  constructor(
    private insuranceDataService: InsurancePolicyService
  ) {
    this.getInsurancePolicyData();
  }

  getInsurancePolicyData(pathParams?: string) {
    this.insuranceDataService.getInsurancePolicyData(pathParams).subscribe((datum: InsurancePolicyModel[]) => {
      if (datum && datum.length > 0) {
        this.insuranceData = datum;
        if (this.columns.length < 1) {
          this.columns = Object.keys(datum[0]).map(x => ({
            key: x,
            filterVal: '',
            sort: ''
          }));
        }
      }
    })
  }
}
