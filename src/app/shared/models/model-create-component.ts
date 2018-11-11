import { ToastService, BS4AlertType } from '../services/toast.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from '../../constants';
import { HasIdInterface } from './has-id.interface';
import { DataService } from '../services/data.service';
import { TableService } from '../services/table.service';

export class ModelCreateComponent<T1 extends HasIdInterface,
    T2 extends DataService<T1>,
    T3 extends TableService<T1, DataService<T1>>> {

    modalRef: NgbModalRef;
    successMessage: string;

    constructor(
        public model: T1,
        public service: T2,
        public tableService: T3,
        public ngbService: NgbModal,
        public toast: ToastService) {
    }

    /**
     * This function is REQUIRED to initialize the Bootstrap
     * Modal.
     * @param template Modal Template
     */
    open(template) {
        this.modalRef = this.ngbService.open(template, AppConstants.MODAL_OPTIONS);
    }

    /**
     * This function is REQUIRED to be triggered when the users
     * close the Modal
     */
    close() {
        this.modalRef.close();
    }

    /**
     * This function is REQUIRED to submit the data to the server
     * when the "save" button is clicked.
     * @param form the form content
     */
    submitModel(form) {
        this.service.create(this.model).subscribe((result) => {
            if (result) {
                this.toast.sendMessage(this.successMessage, BS4AlertType.SUCCESS);
                this.tableService.fetchData();
                form.resetForm();
                this.modalRef.close();
            }
        }, (error) => {
            // this.invalidLogin = true;
            console.log('Failed!');
        });
    }
}
