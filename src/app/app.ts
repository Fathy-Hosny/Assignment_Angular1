import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { Notfound } from "./components/notfound/notfound";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent, AboutComponent, PortfolioComponent, ContactComponent, Notfound, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Assignment_Angular1';
}
