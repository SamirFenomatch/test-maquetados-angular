import { Component, OnInit } from '@angular/core';
import { Slider } from './slider';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

  public start = "01/14/2016 12:00:00"
  public end = "01/21/2016 12:00:00"
  public diff: any;
  public min: any;
  public hours: Slider[] = [];

  public totalHours: number | undefined;
  public tickInterval: number | undefined;

  constructor() { }

  ngOnInit(): void {
    var num = 2
console.log(num | 1);

    this.dayDiff();
  }

  public valueChanged(e: any) {
    console.log(e.target.value);
}

  public dayDiff() {

    
    var minDate = new Date(this.start);
    var maxDate = new Date(this.end);
    
    this.min = minDate.getTime();
    this.diff = maxDate.getTime();


    let totalMinutes = (this.diff - this.min) / 60000;


    if (totalMinutes < 60) {
      this.getTimeline(totalMinutes, 5)
    }

    this.totalHours = totalMinutes / 60 | 1;

    // if (this.totalHours > 24) {
    //   this.totalHours = this.totalHours / 24
    // }

    if (this.totalHours > 24) {
      this.getTimeline(this.totalHours, 24);
    } else if (this.totalHours < 24){
      this.getTimeline(this.totalHours, 3)
    }
  

  }

  private getTimeline(hours: any, space: number): void {
    
    let days = 1;
    let startDay: boolean = false;

    let slider: Slider;
    let intervalo = 1;
    let visible = false;

    slider = {
      label: 0,
      visible: true
    }

    //this.hours.push(slider);

    for (let i = 0; i <= hours; i++, intervalo++) {
      
      console.log("I: " + i);
      console.log("Intervalo: " + intervalo);
      
      if (intervalo === space) {
        
        startDay = true;

        visible = true;
        intervalo = 1;
        days++

      } else {
        
        visible = false;

        if (i === 0) {
          visible = true;
        }
      }
      
      let label: any = i;

      if (startDay) {
        label = days + " " + i
      }

      slider = {
        label: label,
        visible: visible
      }

      this.hours.push(slider);
      
    }

    console.log(this.hours);
  }

}
