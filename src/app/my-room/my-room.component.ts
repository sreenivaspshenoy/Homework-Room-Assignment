import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-room',
  templateUrl: './my-room.component.html',
  styleUrls: ['./my-room.component.css']
})
export class MyRoomComponent implements OnInit {

  onOrOffFan: string = "on";
  fanStatus: string = "off";
  onOrOffLamp: string = "on";
  lampStatus: string = "off";
  constructor() { }

  ngOnInit() {
  }

  toggledFanSwitch() {
    if(this.onOrOffFan === 'on') {
      this.onOrOffFan = 'off';
      this.fanStatus = "on";
    } else {
      this.onOrOffFan = 'on';
      this.fanStatus = 'off';
    }

  }

  toggledLampSwitch() {
    if(this.onOrOffLamp === 'on') {
      this.onOrOffLamp= 'off';
      this.lampStatus = 'on';
    } else {
      this.onOrOffLamp = 'on';
      this.lampStatus = 'off';
    }
    
  }

  getFanColor() {
    if(this.fanStatus === 'on') {
      return 'green';
    } else {
      return 'red';
    }
  }

  getLampColor() {
    if(this.lampStatus === 'on') {
      return 'green';
    } else {
      return 'red';
    }
  }

}
