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

  constructor (
    private insuranceDataService: InsurancePolicyService
  ) {
    this.getInsurancePolicyData();
  }

  getInsurancePolicyData() {
    this.insuranceDataService.getInsurancePolicyData().subscribe((datum: InsurancePolicyModel[]) => {
      this.insuranceData = datum;
    })
  }
}
