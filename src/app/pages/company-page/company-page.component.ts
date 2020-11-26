import { Component, OnInit } from '@angular/core';
import {CompanyModel} from '../../models/company.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CompaniesService} from '../../services/companies.service';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  company: CompanyModel;
  constructor(private route: ActivatedRoute, private companiesServices: CompaniesService, private router: Router) {
    this.company = this.companiesServices.getCompany(this.route.snapshot.params.slug);
    console.log(this.company);
  }

  ngOnInit(): void {
  }

}
