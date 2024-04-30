import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-asnap',
  templateUrl: './asnap.component.html',
  styleUrl: './asnap.component.scss'
})
export class AsnapComponent implements OnInit{
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = "Athéna";
    this.description = "Athena is a Grec goddess and the daughter of Zeus"
    this.createDate = new Date()
    this.snaps = 6;
    this.imageUrl = "/assets/Athena-Wisdom.jpg";
  }
}
