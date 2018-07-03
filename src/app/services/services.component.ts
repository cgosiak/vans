import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services: Service[] = [
    new Service(
      'SIP Construction',
      `Structural insulated panels (SIPs) are a high performance building system
      for residential and light commercial construction. The panels consist of an insulating foam core
      sandwiched between two structural facings, typically oriented strand board (OSB).`,
      'https://i.ytimg.com/vi/byz9iM3iveA/maxresdefault.jpg'
    ),
    new Service(
      'Siding Installation',
      `Something about siding...`,
      'https://i.ytimg.com/vi/byz9iM3iveA/maxresdefault.jpg'
    ),
    new Service(
      'Roofing',
      `Something about roofing...`,
      'https://i.ytimg.com/vi/byz9iM3iveA/maxresdefault.jpg'
    ),
    new Service(
      'General Contracting',
      `Something about contracting...`,
      'https://i.ytimg.com/vi/byz9iM3iveA/maxresdefault.jpg'
    ),
    new Service(
      'Residential Construction',
      `You get it...`,
      'https://i.ytimg.com/vi/byz9iM3iveA/maxresdefault.jpg'
    ),
    new Service(
      'Commercial Construction',
      `More stuff...`,
      'https://i.ytimg.com/vi/byz9iM3iveA/maxresdefault.jpg'
    ),
    new Service(
      'Remodeling/Maintenance of Existing Structures',
      'More stuff...',
      'https://i.ytimg.com/vi/byz9iM3iveA/maxresdefault.jpg'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

}

class Service {
  constructor(
    public title: String,
    public description: String,
    public image: String
  ) {}
}
