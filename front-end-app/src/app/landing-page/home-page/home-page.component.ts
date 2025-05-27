import { Component } from '@angular/core';
import { InsurancePolicyService } from 'src/app/services/insurance-policy.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor (
    private insuranceDataService: InsurancePolicyService
  ) {}

  getInsurancePolicyData() {
    
  }

}
