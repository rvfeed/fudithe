import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rr-risk-rating',
  template: `
    <p>
     <rr-myview></rr-myview>
    </p>
  `,
  styles: []
})
export class RiskRatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
