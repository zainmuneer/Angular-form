import { Component } from '@angular/core';



@Component({
  selector: 'app-slot-app',
  templateUrl: './slot-app.component.html',
  styleUrls: ['./slot-app.component.css']
})
export class SlotAppComponent {
  constructor(){


    
  }
  // AddSlot(){
  //   console.log('AddSlot');
  // }

  openModal(){
    console.log('Open modal');
  }
}
