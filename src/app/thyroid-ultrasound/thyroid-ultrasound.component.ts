import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-thyroid-ultrasound',
  templateUrl: './thyroid-ultrasound.component.html',
  styleUrls: ['./thyroid-ultrasound.component.sass']
})
export class ThyroidUltrasoundComponent implements OnInit {
  preview: boolean;

  name: string;
  personasKods: string;

  isthmusSize: number;
  isthmusStructure: string;
  isthmusContour: string;
  isthmusAnomalities: string;

  leftSideSize: number;
  leftSideStructure: string;
  leftSideContour: string;
  leftSideAnomalities: string;

  rightSideSize: number;
  rightSideStructure: string;
  rightSideContour: string;
  rightSideAnomalities: string;

  dateTaken;
  
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dateTaken = event.value;
    this.dateTaken = this.dateTaken.toISOString().substring(0, 10);
  }

  constructor() { }

  ngOnInit() {
  }

}
