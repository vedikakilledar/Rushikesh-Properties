import { Component } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent {
  selectedCategory: string | null = null;

  showImages(category: string): void {
    this.selectedCategory = category;
  }

  getImageList(category: string): string[] {
    // Add your image URLs for each category here
    // For demonstration purposes, I'm using placeholder images
    switch (category) {
      case 'builders':
        return ['assets/Aditya properties.jpg', 'assets/Amar builders.jpg', 'assets/Ankur associates.jpg', 'assets/Antarkar and joshi pramoters.jpg','assets/Arham landmarks.jpg','assets/badhekar_group.jpg','assets/Beharay group.jpg',
        'assets/BK jhala and associates.jpg','assets/Deshpande-Landmarks.jpg','assets/Gera group.jpg','assets/Goel ganga develpoments.jpg'
      ,'assets/Gokhle constructions.JPG','assets/Joshi buildcon.jpg', 'assets/K_Raheja_Corp.jpg', 'assets/karan developers.jpg', 'assets/Kotibhaskar infra.jpg', 
      'assets/Kran group properties and buildres.jpg', 'assets/Kwality restorent.jpg', 'assets/Lohia jain.jpg', 'assets/Majestique landmarks.jpg', 'assets/Mittal group.jpg', 
      'assets/New front group.jpg', 'assets/Nirman developers.jpg'
      , 'assets/Ranjekar Construction.jpg', 'assets/nest constuctions.jpg', 'assets/Paranjape schemes.jpg', 'assets/Parulekar realty.jpg', 'assets/Pride housing and construction.jpg', 
      'assets/Ravetkar construction.JPG', 'assets/Rohan-Builders.jpg', 'assets/sangam-press-pvt-ltd.jpg', 'assets/Sharda alliance.jpg', 'assets/Shree venktesh buildcon.jpg', 
      'assets/Siddhashila group.jpg', 'assets/Signet realties.jpg', 'assets/Sobha group.jpg', 'assets/Solitaire.jpg', 'assets/Swajas Construction.jpg', 'assets/TejRaj group.jpg', 
      'assets/Tribandha ventures.jpg','assets/Vilas javdkar.jpg', 'assets/vyas-buildcon pvt.ltd.jpg', 'assets/Yash pramoters and builders.jpg'];
      case 'hotel':
        return ['assets/Atithi by kwality restaurent.jpg', 'assets/Cafe durga.jpg', 'assets/Crazy cheesy cafe.jpg', 'assets/Khatri bandhu.jpg', 'assets/Maskawala & co.jpg', 'assets/Naturals ice cream.jpg', 
        'assets/S.P Biryani House.jpg', 'assets/Saiba amrittulya.jpg', 'assets/Sujata mastani.jpg', 'assets/Yewale amruttulya.jpg'];
      case 'hospital':
        return ['assets/Jahangir hospital.jpg', 'assets/Jupiter hospital.jpg', 'assets/Shashwat hospital.jpg'];
      default:
        return [];
    }
  }
}
