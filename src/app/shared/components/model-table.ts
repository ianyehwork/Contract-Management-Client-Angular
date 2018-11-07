import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from '../../constants';
import { HasIdInterface } from '../models/has-id.interface';
import { DataService } from '../services/data.service';
import { TableService } from '../services/table.service';

export class ModelTable<T1 extends HasIdInterface,
    T2 extends TableService<T1, DataService<T1>>> {

    modelList: T1[] = [];

    constructor(public service: T2,
        public modalService: NgbModal,
        public editComponent: any) {
    }

    /**
     * Used for Sorting
     */
    order = '';
    reverse = true;

    /**
     *  Used for searching
     */
    field = '';
    match = '';

    /**
     * Used for pagination
     */
    page: number;
    pageSize = 15;

    /**
     * This function is REQUIRED for ngx-order-pipe Sorting
     * @param value
     */
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }

    /**
     * This function is used for pagination
     */
    onPageChange() {
        // TODO
        console.log(this.page);
    }

    /**
     * This function is triggered when the user clicks the table row
     * to edit the model.
     * @param model new Customer created by the user
     */
    openEditModal(model: T1) {
        const modalRef = this.modalService.open(this.editComponent, AppConstants.MODAL_OPTIONS);
        // Pass model as a Input to ModalRef
        modalRef.componentInstance.model = model;
    }
}
