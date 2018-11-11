import { HasIdInterface } from '../models/has-id.interface';
import { DataService } from '../services/data.service';
import { TableService } from '../services/table.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { ToastService } from '../services/toast.service';

export class ModelDeleteComponent<T1 extends HasIdInterface,
    T2 extends DataService<T1>,
    T3 extends TableService<T1, DataService<T1>>> {

    @Input() model: T1;

    constructor(
        public activeModal: NgbActiveModal,
        public modelService: T2,
        public tableService: T3,
        public toast: ToastService) {
    }

    deleteModel() {
        this.modelService.delete(this.model).subscribe((response) => {
            if (response) {
                this.tableService.fetchData();
                this.activeModal.close({});
            }
        }, (error) => {

        });
    }

    cancel() {
        this.activeModal.close({ data: this.model });
    }
}
