import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  contentBoxes = [
    { name: 'TRIBANDH', location: 'Sajanand colony,near mahatma society,Kothrud,Pune', image: 'assets/Tribandh-Sajanand colony, near mahatma society,kothrud pune.jpeg' },
    { name: 'NIRMAN VISHMUBAGH', location: 'Behind Government Polytechnic,Near Firodiya Garden, Model Colony,shivajinagar,pune', image: 'assets/Nirman Vishnubagh-Behind Government Polytechnic,Near Firodiya Garden, Model Colony,shivajinagar,pune.jpeg' },
    { name: 'GURUVAIBHAV', location: 'Rambagh colony,Kothrud,Pune', image: 'assets/Guruvaibhav- rambagh colony kothrud pune.jpeg' },
    { name: 'GAURAV ICON TOWER (GIT)', location: 'Mumbai-pune expressway', image: 'assets/Gaurav icon tower(GIT)Mumbai-pune expressway.jpeg' },
    { name: 'NOBEL NIWAS', location: 'Gultekdi Marketyard,Pune', image: 'assets/Nobel Niwas- Gultekdi marketyard pune.jpeg' },
    { name: 'METROPOLIS', location: 'Balweadi High Street,Pune', image: 'assets/Metropolis-Balweadi High Street pune.jpeg' },
    { name: 'YOGESHWAR', location: 'Dahanukar colony,Pune', image: 'assets/Yogeshwar-Dahanukar colony.jpeg' },
    { name: 'AROHI', location: 'Dahanukar Colony,Pune', image: 'assets/Arohi-dahanukar colony,pune.jpeg' },
    { name: 'YASHSHWI', location: 'Pune Vidhyapit', image: 'assets/Yashshwi-pune vidhyapit.jpeg' },
    
    { name: 'Swojas', location: 'IDEAL COLONY, Poud Road', image: 'assets/Swojas-IDEAL COLONY, PAUD ROAD.jpeg' },
    { name: 'ANJALIKUNJ', location: 'Near Bal Vikas Kendra Park,Kothrud,Pune', image: 'assets/Anjalikunj-Kothrud Pune Near Bal Vikas Kendra Park.jpeg' },
    { name: ' Varad', location: 'Location 2', image: 'assets/Varad.jpg' },
   
    // Add more data for other content boxes
  ];
}
