import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-asnap',
  templateUrl: './asnap.component.html',
  styleUrl: './asnap.component.scss'
})
export class AsnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = "Athéna";
    this.description = "Athena is a Grec goddess and the daughter of Zeus"
    this.createdDate = new Date()
    this.snaps = 6;
    this.imageUrl = "/assets/Athena-Wisdom.jpg";
    this.buttonText = "Oh Snap !";
  }
  onSnap(){
    if (this.buttonText === 'Oh Snap !') { 
      this.snaps++;
      this.buttonText= 'Oops, unSnap !'
    } else {
      this.snaps--;
      this.buttonText= 'Oh Snap !'
    }
    
  }
}
