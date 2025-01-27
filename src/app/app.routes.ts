import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [

    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'contacts',component:ContactComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'resume',component:ResumeComponent}
];
