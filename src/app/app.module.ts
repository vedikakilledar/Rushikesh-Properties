import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './about-us/profile/profile.component';
import { OurTeamComponent } from './about-us/our-team/our-team.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ImageSlideshowComponent } from './image-slideshow/image-slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent,
    AboutUsComponent,
    ProjectsComponent,
    OurClientsComponent,
    ContactUsComponent,
    ProfileComponent,
    OurTeamComponent,
    OurClientsComponent,
    ImageSlideshowComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
