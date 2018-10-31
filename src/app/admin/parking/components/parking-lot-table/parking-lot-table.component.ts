import { ParkingArea } from './../../models/parking-area';
import { Component, OnInit, Input } from '@angular/core';
import { convertUTCDateTimeToYMD } from './../../../../shared/util/date-time-convertor';
import { ParkingLotService } from '../../services/parking-lot.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParkingLot } from './../../models/parking-lot';
import { ParkingLotEditComponent } from '../parking-lot-edit/parking-lot-edit.component';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-parking-lot-table',
  templateUrl: './parking-lot-table.component.html',
  styleUrls: ['./parking-lot-table.component.css']
})
export class ParkingLotTableComponent implements OnInit {

  @Input() area: ParkingArea;
  modelList: ParkingLot[] = [];

  constructor(private service: ParkingLotService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getAll(`?_area=${this.area._id}`).subscribe((result) => {
      this.modelList = result;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
        array[index].dateModified = convertUTCDateTimeToYMD(array[index].dateModified);
      });
    });
  }

  /**
   * This function is triggered when the user clicks the "Save" button
   * in CreateCustomerComponent.
   * @param model new Customer created by the user
   */
  addNewModel(model: ParkingLot) {
    model.dateCreated = convertUTCDateTimeToYMD(model.dateCreated);
    model.dateModified = convertUTCDateTimeToYMD(model.dateModified);
    this.modelList.push(model);
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   * @param model new Customer created by the user
   */
  openEditModal(model: ParkingLot) {
    const modalRef = this.modalService.open(ParkingLotEditComponent, AppConstants.MODAL_OPTIONS);
    // Pass poster as a Input to ModalRef
    modalRef.componentInstance.model = model;

    modalRef.result.then(result => {
      if (result.operation === 'Delete') {
        this.modelList = this.modelList.filter((item) => {
          if (item._id !== result.data._id) {
            return item;
          }
        });
      } else if (result.operation === 'Update') {
        this.modelList.forEach((value, index, array) => {
          if (value._id === result.data._id) {
            result.data.dateCreated = convertUTCDateTimeToYMD(result.data.dateCreated);
            result.data.dateModified = convertUTCDateTimeToYMD(result.data.dateModified);
            array[index] = result.data;
          }
        });
      }
    }, refused => {});
  }

}
