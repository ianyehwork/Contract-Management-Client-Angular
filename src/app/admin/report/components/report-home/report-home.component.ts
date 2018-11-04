import { ReportService } from '../../services/report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.css']
})
export class ReportHomeComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  ngOnInit() {
  }

  // in Chrome and Firefox, with the uBlock Origin extension,
  // it would try to open the new window and close it automatically.
  createReport() {
    this.reportService.getPaymentReport().subscribe((response) => {
      const fileURL = URL.createObjectURL(response);
      window.open(fileURL);
    });
  }
}
