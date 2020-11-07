import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countType(list, value) {
    let count = 0
    for (let i = 0; i < list.length; i++) {
      let satType = list[i].type;
      if (satType.toLowerCase() === value) {
          count +=1;
      }
    } return count
  }

  countAll(list) {
    return list.length
  }
}
