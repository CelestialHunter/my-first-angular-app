import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from '../../models/company.model';
import {CompaniesService} from '../../services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {


  @Input()
  coolLink: string;
  companies: CompanyModel[];
  constructor(companies: CompaniesService) {
    this.companies = companies.getCompanies();
  }

  ngOnInit(): void {
  }

}
