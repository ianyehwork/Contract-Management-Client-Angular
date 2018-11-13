import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelTableComponent } from '../../../../shared/models/model-table-component';
import { Contract } from '../../models/contract';
import { ContractTableService } from '../../services/contract-table.service';
import { ContractEditComponent } from './../contract-edit/contract-edit.component';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent extends ModelTableComponent<Contract, ContractTableService> implements OnInit {

  contactName = '';

  constructor(service: ContractTableService,
    modalService: NgbModal) {
    super(service, modalService, ContractEditComponent);
    this.subscription = this.service.getModelChannel().subscribe(contracts => {
      console.log(contracts);
      for (let i = 0; i < contracts.data.length; i++) {
        const model = contracts.data[i];
        model['sDate'] = new Date(model.sYear, model.sMonth - 1, model.sDay);
        model['pDate'] = new Date(model.pYear, model.pMonth - 1, model.pDay);
        model['ssDate'] = model.sYear + '-' + model.sMonth + '-' + model.sDay;
        model['spDate'] = model.pYear + '-' + model.pMonth + '-' + model.pDay;
      }
      this.modelList = contracts.data;
      this.collectionSize = contracts.collectionSize;
      this.isLoading = false;
    }
    );
  }

  ngOnInit() {
    this.field = 'active';
    this.refresh();
  }

  refresh() {
    this.isLoading = true;
    if (this.contactName !== '') {
      this.service.setCustomFilter('&contactName=' + this.contactName);
    } else {
      this.service.clearCustomFilter();
    }

    this.service.refresh(
      this.field,
      this.match,
      this.order,
      this.reverse,
      this.page,
      this.pageSize
    );
  }
}
