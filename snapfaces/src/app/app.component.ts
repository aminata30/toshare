import { Component, OnInit } from '@angular/core';
import { Asnap } from './models/asnap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  mySnap!: Asnap;
  myOtherSnap!: Asnap;
  myLastSnap!: Asnap;
  ngOnInit(){
    this.mySnap = new Asnap(
      "Athéna",
      "Athena is a Greek goddess and the daughter of Zeus",
      "/assets/Athena-Wisdom.jpg",
      new Date(),
      0
    );
    this.myOtherSnap = new Asnap(
      "Aphrodite",
      "Vénus is a Greek goddess and the daughter of Ouranos",
      "/assets/goddess-aphrodite.jpg",
      new Date(),
      0
    );
    this.myLastSnap = new Asnap(
      "Artémis",
      "Artémis is a Greek goddess and the daughter of Zeus",
      "/assets/artemis-goddess.jpg",
      new Date(),
      0
    );
  }
}

