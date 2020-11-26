import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from '../../models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input()
  company: CompanyModel;

  constructor() { }

  ngOnInit(): void {
  }

}
