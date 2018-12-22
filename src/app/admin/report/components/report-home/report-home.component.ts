import { ReportService } from '../../services/report.service';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.css']
})
export class ReportHomeComponent implements OnInit {

  isLoading = false;

  constructor(
    private reportService: ReportService,
    private calendar: NgbCalendar) { }

  noPaymentFilter;
  paymentYear;
  paymentMonth;

  incomeStartDate;
  incomeEndDate;

  ngOnInit() {
    const today = this.calendar.getToday();
    this.paymentYear = today.year;
    this.paymentMonth = today.month;
    this.noPaymentFilter = true;
    this.incomeStartDate = this.calendar.getToday();
    this.incomeStartDate.day = 1;
    this.incomeEndDate = today;
  }

  // in Chrome and Firefox, with the uBlock Origin extension,
  // it would try to open the new window and close it automatically.
  createPaymentReport() {
    this.isLoading = true;
    let query = '';
    if (!this.noPaymentFilter) {
      query = `?paymentYear=${this.paymentYear}&paymentMonth=${this.paymentMonth}`;
    }
    this.reportService.getPaymentReport(query).subscribe((response) => {
      const fileURL = URL.createObjectURL(response);
      window.open(fileURL);
      this.isLoading = false;
    });
  }

  createIncomeReport() {
    this.isLoading = true;
    let query = `?sy=${this.incomeStartDate.year}&sm=${this.incomeStartDate.month}&sd=${this.incomeStartDate.day}&`;
    query += `ey=${this.incomeEndDate.year}&em=${this.incomeEndDate.month}&ed=${this.incomeEndDate.day}`;
    this.reportService.getIncomeReport(query).subscribe((response) => {
      const fileURL = URL.createObjectURL(response);
      window.open(fileURL);
      this.isLoading = false;
    });
  }
}
