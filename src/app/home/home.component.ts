import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  commertialCount: number = 0;
  happyFamiliesCount: number = 0;
  propertiesSaleCount: number = 0;
  
  constructor() {
    // Initialize the counters
    this.startCounting();
  }
  
  startCounting() {
    // Count for Commertial Premises (up to 500+)
    setInterval(() => {
      if (this.commertialCount <= 500) {
        this.commertialCount++;
      }
    }, 10);
  
    // Count for Happy Families (up to 500+)
    setInterval(() => {
      if (this.happyFamiliesCount <= 500) {
        this.happyFamiliesCount++;
      }
    }, 10);
  
    // Count for Properties Sale (up to 100+)
    setInterval(() => {
      if (this.propertiesSaleCount <= 100) {
        this.propertiesSaleCount++;
      }
    }, 50); 
  }
  
}
