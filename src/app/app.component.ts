import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  jsonData: XlsxDataI[] = [
    { name: 'hussein', job: 'web developer' },
    { name: 'test', job: 'developer' },
    { name: 'test2', job: 'developer2' },
    { name: 'test3', job: 'developer3' },
  ];


  exportAsExcelFile(json: XlsxDataI[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, `${excelFileName}_export_${new Date().getTime()}.xlsx`);
  }


  downloadFile(): void {
    this.exportAsExcelFile(this.jsonData, 'fileName')
  }
}

interface XlsxDataI {
  name: string;
  job: string;
}