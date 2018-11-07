import { Injectable } from '@angular/core';

import { TableService } from '../../../shared/services/table.service';
import { ParkingLot } from '../../parking/models/parking-lot';
import { ParkingLotService } from '../../parking/services/parking-lot.service';

@Injectable()
export class ParkingLotTableService extends TableService<ParkingLot, ParkingLotService> {
  constructor(service: ParkingLotService) {
    super(service);
  }
}
