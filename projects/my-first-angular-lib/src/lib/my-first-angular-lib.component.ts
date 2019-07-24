import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-first-angular-lib',
  template: `
    <p>
      my-first-angular-lib works!
    </p>
  `,
  styles: []
})
export class MyFirstAngularLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
