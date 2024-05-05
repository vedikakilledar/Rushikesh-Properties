import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  constructor(private router: Router) {}
  
  navigateToCourses() {
    this.router.navigate(['/app-upcoming-projects']);
  }

  navigateToFacilities() {
    this.router.navigate(['/app-projects']);
  }

  navigateToAboutUs() {
    this.router.navigate(['/app-about-us']);
  }

  navigateToContactUs() {
    this.router.navigate(['/app-contact-us']);
  }
}

