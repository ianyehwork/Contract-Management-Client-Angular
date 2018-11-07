import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelTableComponent } from '../../../../shared/components/model-table-component';
import { Contract } from '../../models/contract';
import { ContractTableService } from '../../services/contract-table.service';
import { ContractEditComponent } from './../contract-edit/contract-edit.component';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent extends ModelTableComponent<Contract, ContractTableService> implements OnInit {

  constructor(service: ContractTableService,
              modalService: NgbModal) {
    super(service, modalService, ContractEditComponent);
  }

  ngOnInit() {
    // Default search field
    this.field = '_customer.pContact';
    this.service.getModelChannel().subscribe(contracts => {
      for (let i = 0; i < contracts.length; i++) {
        const model = contracts[i];
        model['sDate'] = new Date(model.sYear, model.sMonth - 1, model.sDay);
        model['pDate'] = new Date(model.pYear, model.pMonth - 1, model.pDay);
        model['ssDate'] = model.sYear + '-' + model.sMonth + '-' + model.sDay;
        model['spDate'] = model.pYear + '-' + model.pMonth + '-' + model.pDay;
        model['sStatus'] = (model.active ? '生效' : '終止');
      }
      this.modelList = contracts;
    }
    );
  }
}
