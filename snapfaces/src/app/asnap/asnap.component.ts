import { Component, OnInit,  Input} from '@angular/core';
import {Asnap} from '../models/asnap.model';

@Component({
  selector: 'app-asnap',
  templateUrl: './asnap.component.html',
  styleUrl: './asnap.component.scss'
})
export class AsnapComponent implements OnInit{
 @Input() aSnap!:  Asnap;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;
  postNum!: number;

  ngOnInit() {
    this.buttonText = "Oh Snap !";
  }
  onSnap(){
    if (this.buttonText === 'Oh Snap !') { 
      this.aSnap.snaps++;
      this.buttonText= 'Oops, unSnap !'
    } else {
      this.aSnap.snaps--;
      this.buttonText= 'Oh Snap !'
    }
    
  }
}