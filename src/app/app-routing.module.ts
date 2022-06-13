import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SkillsPageComponent } from './components/skills-page/skills-page.component';
import { EducationPageComponent } from './components/education-page/education-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'about-page', component: AboutPageComponent},
  { path: 'skills-page', component: SkillsPageComponent},
  { path: 'education-page', component: EducationPageComponent},
  { path: 'experience-page', component: ExperiencePageComponent},
  { path: 'contact-page', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
