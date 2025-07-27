import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imgs: string[] = ['/imgs/port1.png', '/imgs/port2.png', '/imgs/port3.png'];
  repeatedImgs(): string[] {
  return Array.from({ length: 2 }).flatMap(() => this.imgs);
}
}
