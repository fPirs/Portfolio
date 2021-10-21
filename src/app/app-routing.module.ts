import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'home', component: PortfolioComponent},
  {path:'contact', component: ContactComponent},
  {path:'skills', component: SkillsComponent},
  {path: '',  component: HomeComponent, data: {animation:'isLeft'}, pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
