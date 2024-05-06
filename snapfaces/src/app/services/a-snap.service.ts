import { Injectable } from "@angular/core";
import { Asnap } from "../models/asnap.model";

@Injectable({
  providedIn:'root'
})

export class ASnapService {
  aSnapsArray: Asnap[] =[
    {
      id:1,
      title: "Athéna",
      location: 'Agen',
      description: "Athena is a Greek goddess and the daughter of Zeus",
      imageUrl: "/assets/Athena-Wisdom.jpg",
      createdDate: new Date(),
      snaps: 150,
    },
    {
      id:2,
      title: "Aphrodite",
      location: 'Angers',
      description: "Aphrodite is a Greek goddess and the daughter of Ouranos",
      imageUrl: "/assets/goddess-aphrodite.jpg",
      createdDate: new Date(),
      snaps: 95,
    },
    {
      id:3,
      title: "Artémis",
      description: "Artémis is a Greek goddess and the daughter of Zeus",
      imageUrl: "/assets/artemis-goddess.jpg",
      createdDate: new Date(),
      snaps: 149,
    },
  ];
  
  getAllASnap(): Asnap[] {
    return this.aSnapsArray;
  }

  getASnapById(aSnapId: number): Asnap {
    const ASnap = this.aSnapsArray.find(ASnap => aSnapId === aSnapId);
    if(!ASnap){
      throw new Error("Asnap not found");
    } else {
      return ASnap;
    }
  }

  snapASnapById(aSnapId: number, snapType: string): void{
    const ASnap = this.getASnapById(aSnapId);
    snapType === 'snap' ? ASnap.snaps++ : ASnap.snaps--;
  }
}