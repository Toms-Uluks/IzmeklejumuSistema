import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-prostate-check',
  templateUrl: './prostate-check.component.html',
  styleUrls: ['./prostate-check.component.sass']
})
export class ProstateCheckComponent implements OnInit {

    preview: boolean;
  
    prostateSize: number;
    prostateStructure: string;
    prostateContour: string;
    prostateStructureSize: number;
  
    recomendation: string;
    final: string;
    doctorName: string;
    
    name = '';
    personasKods = '';
    recomendationReason = '';
    finalReason = '';
    dateTaken;
    
    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      this.dateTaken = event.value;
      this.dateTaken = this.dateTaken.toISOString().substring(0, 10);
    }
  
  constructor() { }

  ngOnInit() {
  }

}
