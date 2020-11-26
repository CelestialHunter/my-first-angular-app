import { Injectable } from '@angular/core';
import {CompanyModel} from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  companies: CompanyModel[] = [
    {
      id: 1,
      name: 'name1',
      description: 'desc1'
    },
    {
      id: 2,
      name: 'name2',
      description: 'desc2'
    }
  ];

  constructor() { }

  getCompanies(): CompanyModel[] {
    return this.companies;
  }

  getCompany(ID: number): CompanyModel {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.companies.length; i++) {
        if (this.companies[i].id == ID) {
          return this.companies[i];
        }
    }
  }
}

