import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  showParagraph = false;
  myArray = [] ;

  contructor(){}

  onBtnDisplayDetailsClick_(e:Event){
    this.showParagraph=!this.showParagraph;
    // this.myArray.push(this.myArray.length+1);
    this.myArray.push(new Date());
  }
}
