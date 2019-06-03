import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-chest-usg',
  templateUrl: './chest-usg.component.html',
  styleUrls: ['./chest-usg.component.sass']
})
export class ChestUsgComponent implements OnInit {
  preview: boolean;

  Alimfmezgli = 'Nevizualizējas';
  Blimfmezgli = 'Nevizualizējas';
  Climfmezgli = 'Nevizualizējas';
  rightChest = '';
  leftChest = '';
  rightChestAnomalities = '';
  leftChestAnomalities = '';
  recomendation: string;
  final: string;
  doctorName: string;
  
  name = '';
  personasKods = '';
  AlimfmezgliReason = '';
  BlimfmezgliReason = '';
  ClimfmezgliReason = '';
  rightChestReason = '';
  rightChestAnomalitiesReason = '';
  leftChestReason = '';
  leftChestAnomalitiesReason = '';
  recomendationReason = '';
  finalReason = '';
  dateTaken;
  
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dateTaken = event.value;
    this.dateTaken = this.dateTaken.toISOString().substring(0, 10);
  }



  doctors: [
    {
      id: 1,
      name: 'Ausma Erdmane'
    }
  ]
  constructor() { }

  ngOnInit() {
  }


}
