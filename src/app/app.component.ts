import { Component, ChangeDetectionStrategy, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AppComponent {
  title = 'Angular10Crud';
  scrollPosition: any;
  pageScroll = false;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  changeOfRoutes(){
    // console.log("changeOfRoutes function!");
    // console.log(this.router.url);
    if(this.router.url === '/' || this.router.url === '/Home'){
       this.pageScroll = false;
    }
    else{
      this.pageScroll = true;
    }
   }

  @HostListener('window:scroll', ['$event']) onWindowScroll($event:any) { 

    this.scrollPosition = $event.target.children[0].scrollTop;
    console.log("scrollPosition:" + this.scrollPosition);

    if(this.router.url === '/' || this.router.url === '/Home'){
    if(this.scrollPosition <= 1000) {
      this.pageScroll = false;
    }

    if(this.scrollPosition > 1000) {
      this.pageScroll = true;
    }
  }

  };

  

  
}
