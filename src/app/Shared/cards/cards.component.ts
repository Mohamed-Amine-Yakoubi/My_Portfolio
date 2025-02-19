import { Component, Input } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image: string = '';
  @Input() icon1: string | string[] = '';
  @Input() icon2: string | string[] = '';
  @Input() icon3: string | string[] = '';
  @Input() icon4: string | string[] = '';
  @Input() icon5: string | string[] = '';
  goToGitHub(): void {
    window.open('https://github.com/Mohamed-Amine-Yakoubi/Autopro', '_blank');
  }
}
