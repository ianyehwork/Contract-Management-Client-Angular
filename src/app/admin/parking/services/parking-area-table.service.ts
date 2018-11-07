import { Injectable } from '@angular/core';

import { TableService } from '../../../shared/services/table.service';
import { ParkingArea } from './../models/parking-area';
import { ParkingAreaService } from './parking-area.service';

@Injectable()
export class ParkingAreaTableService extends TableService<ParkingArea, ParkingAreaService> {
  constructor(service: ParkingAreaService) {
    super(service);
  }
}
