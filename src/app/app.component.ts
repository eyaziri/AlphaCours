import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerInvestmentComponent } from "./career-investment/career-investment.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, CareerInvestmentComponent, TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'GestionDeCours';
}
