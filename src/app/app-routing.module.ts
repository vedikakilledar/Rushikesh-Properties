import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { UpcomingProjectsComponent } from './upcoming-projects/upcoming-projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurClientsComponent } from './our-clients/our-clients.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'app-home', component: HomeComponent }, 
  { path: 'app-about-us', component: AboutUsComponent},
 // { path: 'app-upcoming-projects', component: UpcomingProjectsComponent },
  { path: 'app-projects', component: ProjectsComponent },
  { path: 'app-contact-us', component: ContactUsComponent },
  { path: 'app-our-clients', component: OurClientsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
