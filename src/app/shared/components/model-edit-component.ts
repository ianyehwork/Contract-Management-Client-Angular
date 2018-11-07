import { Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from '../../constants';
import { HasIdInterface } from '../models/has-id.interface';
import { DataService } from '../services/data.service';
import { TableService } from '../services/table.service';
import { ToastService } from '../services/toast.service';

export class ModelEditComponent<T1 extends HasIdInterface,
    T2 extends DataService<T1>,
    T3 extends TableService<T1, DataService<T1>>> implements OnInit {

    @Input() model: T1;
    originalModel: T1;

    constructor(
        public activeModal: NgbActiveModal,
        public modelService: T2,
        public tableService: T3,
        public modalService: NgbModal,
        public toast: ToastService,
        public editComponent: any,
        public deleteComponent: any
    ) {
    }

    ngOnInit() {
        this.modelService.getById(this.model._id).subscribe((response) => {
            this.model = response;
            this.originalModel = response;
        });
    }

    updateModel() {
        this.modelService.update(this.model).subscribe((result) => {
            if (result) {
                this.tableService.update(result);
                this.activeModal.close();
            }
        });
    }

    openDeleteModal() {
        this.activeModal.dismiss();
        const modalRef = this.modalService.open(this.deleteComponent, AppConstants.MODAL_OPTIONS);
        modalRef.componentInstance.model = this.model;

        modalRef.result.then(result => {
            console.log(result);
            if (result.data) {
                this.modelService.getById(result.data._id).subscribe(data => {
                    console.log('Here');
                    console.log(this.editComponent);
                    const ref = this.modalService.open(this.editComponent, AppConstants.MODAL_OPTIONS);
                    ref.componentInstance.model = data;
                });
            }
        }, refused => { });
    }

    cancel() {
        this.model = this.originalModel;
        this.activeModal.dismiss();
    }
}
