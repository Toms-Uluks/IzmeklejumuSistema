import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abdominal-cavity-ultrasound',
  templateUrl: './abdominal-cavity-ultrasound.component.html',
  styleUrls: ['./abdominal-cavity-ultrasound.component.sass']
})
export class AbdominalCavityUltrasoundComponent implements OnInit {
  preview: boolean;

  liverSize: string;
  liverStructure: string;
  liverEphogenicity: string;
  liverDucts : string;
  bladderWalls: string;
  bladderWidth: string;
  bladderEcostructure: string;
  bladderComments: string;
  pancreaParts: string;
  pancreaSize: string;
  pancreaEcostructure: string;
  pancreaWalls: string;
  pancreaTail: string;
  kidneySize: string;
  kidneyContour: string;
  kidneyParehima: string;
  kidneyUrostasi: string;
  kidneyKonrimentus: string;
  
  final: string;
  doctorName: string;

  name = '';
  personasKods = '';
  limfmezgliReason = '';
  bothchestReason = '';
  anomalitiesReason = '';
  finalReason = '';
  dateTaken;
  constructor() { }

  ngOnInit() {
  }

}
