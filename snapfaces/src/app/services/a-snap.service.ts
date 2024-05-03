import { Injectable } from "@angular/core";
import { Asnap } from "../models/asnap.model";
@Injectable({providedIn:'root'})
export class ASnapService {
    aSnapsArray: Asnap[] =[
        {
          title: "Athéna",
          location: 'Agen',
          description: "Athena is a Greek goddess and the daughter of Zeus",
          imageUrl: "/assets/Athena-Wisdom.jpg",
          createdDate: new Date(),
          snaps: 150,
        },
        {
          title: "Aphrodite",
          location: 'Angers',
          description: "Aphrodite is a Greek goddess and the daughter of Ouranos",
          imageUrl: "/assets/goddess-aphrodite.jpg",
          createdDate: new Date(),
          snaps: 95,
        },
        {
          title: "Artémis",
          description: "Artémis is a Greek goddess and the daughter of Zeus",
          imageUrl: "/assets/artemis-goddess.jpg",
          createdDate: new Date(),
          snaps: 149,
        },
      ] 
}