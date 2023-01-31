import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home-part-one1',
  templateUrl: './home-part-one1.component.html',
  styleUrls: ['./home-part-one1.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        width: '50%',
      })),
      state('closed', style({
        width: '25%',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  
  // trigger('showHide', [
  //   // ...
  //   state('show', style({
  //     visibility: 'visible',
  //   })),
  //   state('hide', style({
  //     visibility: 'hidden',
  //   })),
  //   transition('show => hide', [
  //     animate('0s')
  //   ]),
  //   transition('hide => show', [
  //     animate('1s')
  //   ]),
  // ]),

]
})
export class HomePartOne1Component implements OnInit {
  isDiv1Visible = true;
  isDiv2Visible = false;
  isDiv3Visible = false;

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  makeDiv1Visible() {
    this.isDiv1Visible = true;
    this.isDiv2Visible = false;
    this.isDiv3Visible = false;
  }

  makeDiv2Visible() {
    this.isDiv1Visible = false;
    this.isDiv2Visible = true;
    this.isDiv3Visible = false;
  }

  makeDiv3Visible() {
    this.isDiv1Visible = false;
    this.isDiv2Visible = false;
    this.isDiv3Visible = true;
  }

}
