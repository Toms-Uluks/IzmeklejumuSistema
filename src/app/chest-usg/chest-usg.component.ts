import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-chest-usg',
  templateUrl: './chest-usg.component.html',
  styleUrls: ['./chest-usg.component.sass']
})
export class ChestUsgComponent implements OnInit {
  preview: boolean;

  limfmezgli: string;
  bothchest: string;
  anomalities: string;
  final: string;
  doctorName: string;

  name = '';
  personasKods = '';
  limfmezgliReason = '';
  bothchestReason = '';
  anomalitiesReason = '';
  finalReason = '';
  dateTaken;
  
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dateTaken = event.value;
    this.dateTaken = this.dateTaken.toISOString().substring(0, 10);
  }

  doctors: [
    {
      id: 1,
      name: 'Test1'
    },
    {
      id: 2,
      name: 'Test2'
    },
    {
      id: 3,
      name: 'Test3'
    },
    {
      id: 3,
      name: 'Test3'
    }
  ]
  constructor() { }

  ngOnInit() {
  }


}
