import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  selected = 'chestUsg';
  constructor() { }

  ngOnInit() {
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title></title>
          <style>
          {'.selector' : {'display' : 'none'}, input: {'border-color': 'transparent', p: {'border':'1px solid black'; 'padding':'10px'}}}
          </style>
        </head>
    <body onload="window.print();window.close()">
      <img style="width: 100px; height: 80px; background-size: contain;" src="../../assets/alpinoLogo.svg">
      <div style="text-align: center" > Artilērijas iela 15-8, Rīga LV-1001 tālr. 22322242, epasts info@alpinoperle.lv </div>
      ${printContents}
    </body>
      </html>`
    );
    popupWin.document.close();
}

}
