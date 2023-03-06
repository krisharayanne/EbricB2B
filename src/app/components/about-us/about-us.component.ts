import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-about-us',
  animations: [
    trigger('slideLeftCenterRight', [
      // ...
      state('center', style({
        visibility: 'visible',
        transform: 'translateX(0%)',  
      })),
      state('left', style({
        visibility: 'hidden',
        transform: 'translateX(-100%)',
      })),
      state('right', style({
        visibility: 'hidden',
        transform: 'translateX(100%)',
      })),
      transition('center => left', [
        animate('1s ease-in')
      ]),
      transition('center => right', [
        animate('1s ease-in')
      ]),
      transition('right => center', [
        animate('1s ease-in')
      ]),
      transition('left => center', [
        animate('1s ease-in')
      ]),
    ]),
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
    currentFrame = "frame1";
    frame1Position = "center";
    frame2Position = "right";
    frame3Position = "right";
    milestonesCurrentFrame = "frame1";
    milestonesFrame1Position = "center";
    milestonesFrame2Position = "center";

    constructor() {
      this.currentFrame = "frame1";
      this.milestonesCurrentFrame = "frame1";
     }
  
    ngOnInit(): void {
    }

    clickLeftButton() {
     console.log("Left button is temporarily not functional!");
    }

    clickLeftMilestonesButton() {
      console.log("Left milestones button is temporarily not functional!");
     }

     clickRightMilestonesButton() {
      if(this.milestonesCurrentFrame == "frame1") {
        this.milestonesFrame1Position = "left";  
        this.milestonesFrame2Position = "center";  
      }
     }

  clickRightButton() {
    if(this.currentFrame == "frame1") {
      this.frame1Position = "left";
    this.frame2Position = "center";
    this.frame3Position = "right";
    this.currentFrame = "frame2";
    }
    else if(this.currentFrame == "frame2") {
      this.frame2Position = "left";
    this.frame3Position = "center";
    this.frame1Position = "right";
    this.currentFrame = "frame3";
    }
    else if(this.currentFrame == "frame3") {
      this.frame3Position = "left";
    this.frame1Position = "center";
    this.frame2Position = "right";
    this.currentFrame = "frame1";
    }
    
  }

  

  

}
