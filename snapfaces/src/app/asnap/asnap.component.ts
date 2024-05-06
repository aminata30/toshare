import { Component, OnInit,  Input} from '@angular/core';
import {Asnap} from '../models/asnap.model';
import { ASnapService } from '../services/a-snap.service';

@Component({
  selector: 'app-asnap',
  templateUrl: './asnap.component.html',
  styleUrl: './asnap.component.scss'
})
export class AsnapComponent implements OnInit{
 @Input() aSnap!:  Asnap;
  buttonText!: string;

  constructor(private aSnapService: ASnapService){}

  ngOnInit() {
    this.buttonText = "Oh Snap !";
  }
  onSnap(){
    if (this.buttonText === 'Oh Snap !') { 
      this.aSnapService.snapASnapById(this.aSnap.id);
      this.buttonText= 'Oops, unSnap !'
    } else {
      this.aSnap.snaps--;
      this.buttonText= 'Oh Snap !'
    }
    
  }
}