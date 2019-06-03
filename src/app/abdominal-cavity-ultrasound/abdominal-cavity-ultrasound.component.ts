import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abdominal-cavity-ultrasound',
  templateUrl: './abdominal-cavity-ultrasound.component.html',
  styleUrls: ['./abdominal-cavity-ultrasound.component.sass']
})
export class AbdominalCavityUltrasoundComponent implements OnInit {
  preview: boolean;

  bladderWalls: string;
  bladderWidth: string;
  bladderEcostructure: string;
  bladderForm: string;
  bladderEcostructureSize: string;

  liverStructureOther: string;
  liverEphogenicityOther: string;
  liverStructure: string;
  liverEphogenicity: string;
  liverDucts : string;
  
  pancreaParts: string;
  pancreaEcostructureOther: string;
  pancreaEcostructure: string;
  pancreaPartsOther: string;
  pancreaPartsContour: string;
  pancreaTail: string;
  pancreaTailOther: string;
  pancreaTailContour: string;

  rightKidneySize: string;
  rightKidneySizeMM: string;
  rightKidneyContour: string;
  rightKidneyZone: string;
  rightKidneyParehima: string;
  rightKidneyParehimaOther: string;
  rightKidneyAnomalies: string;
  rightKidneyKonrimentus: string;  
  
  leftKidneySize: string;
  leftKidneySizeMM: string;
  leftKidneyContour: string;
  leftKidneyZone: string;
  leftKidneyParehima: string;
  leftKidneyParehimaOther: string;
  leftKidneyAnomalies: string;
  leftKidneyKonrimentus: string; 

  spleenSize: string;
  spleenSizeOther: string;
  spleenContour: string;
  spleenStructure: string;

  bladder2Walls: string;
  bladder2Contents: string;
  bladder2ContentsOther: string;
  bladder2Aorta: string;

  limfmezgli: string;
  limfmezgliInfo: string;

  stomachContent: string;
  stomacContentOther: string;

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
