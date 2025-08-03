import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imgs: string[] = ['/imgs/port1.png', '/imgs/port2.png', '/imgs/port3.png'];
  flag: boolean = true;
  modelImg: string = '';

  repeatedImgs(): string[] {
    return Array.from({ length: 2 }).flatMap(() => this.imgs);
  }

  hideModel(el: EventTarget | null, img: HTMLImageElement): void {
    if (el === img) return;
    this.flag = true;
  }


@HostListener('document:keydown', ['$event'])
handleKeyDown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && !this.flag) {
    this.flag = true;
  }
}
}
