
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'test-maquetado-angular';

  public start = "01/14/2016 03:00:00"
  public end = "01/14/2016 12:00:00"
  public diff: any;
  public min: any;
  public hours: any[] = [];

  public totalHours: number | undefined;
  public tickInterval: number | undefined;

  constructor() {

  }

  ngOnInit(): void {
    this.dayDiff();
  }

  public formatLabel(value: number): string {

    console.log(value);
    
    let valueDate = new Date(value);

    console.log(valueDate.getHours())

    let days = valueDate.getDay();
    let hours = valueDate.getHours();
    let minutes = valueDate.getMinutes();
    let seconds = valueDate.getSeconds();

    let format = hours + ":" + minutes + ":" + seconds;

    return minutes + ":" + seconds;
  }

  public getFormattedDate(stDate: any): Date {
    let sDate = new Date(stDate);
    return sDate;
  }

  public dayDiff() {
    
    var minDate = new Date(this.start);
    var maxDate = new Date(this.end);
    
    this.min = minDate.getTime();
    this.diff = maxDate.getTime();


    let totalMinutes = (this.diff - this.min) / 60000;
    this.totalHours = totalMinutes / 60;
    this.getTimeline(this.totalHours)

  }

  private getTimeline(hours: any): void {
    let h = hours / 5;
    let hf = 0;
    for (let i = 0; i < 5; i++) {
    
      hf = h + hf;

      this.hours.push(hf);
      
    }

    console.log(this.hours);
  }

}