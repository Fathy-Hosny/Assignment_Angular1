import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,title:'Home' },
  { path: 'about', component: AboutComponent ,title:'About' },
  {path:'portfolio',component:PortfolioComponent,title:'Portfolio' },
  {path:'contact',component:ContactComponent,title:'Contact' },
  {path:'**',component:Notfound,title:'ERORR404'}

];
