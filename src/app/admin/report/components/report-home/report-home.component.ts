import { ReportService } from '../../services/report.service';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.css']
})
export class ReportHomeComponent implements OnInit {

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
  }

  // in Chrome and Firefox, with the uBlock Origin extension,
  // it would try to open the new window and close it automatically.
  createPaymentReport() {
    console.log(this.paymentYear);
    console.log(this.paymentMonth);
    let query = '';
    if (!this.noPaymentFilter) {
      query = `?paymentYear=${this.paymentYear}&paymentMonth=${this.paymentMonth}`;
    }
    this.reportService.getPaymentReport(query).subscribe((response) => {
      const fileURL = URL.createObjectURL(response);
      window.open(fileURL);
    });
  }

  createIncomeReport() {
    console.log(this.incomeStartDate);
    console.log(this.incomeEndDate);
  }
}
