import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-education',
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './card-education.component.html',
  styleUrl: './card-education.component.scss',
})
export class CardEducationComponent {
  cards: any[] = [];
  degree: string = 'images/degree.png';

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.getDataJourney().subscribe((data) => {
      this.cards = data.Education;
      console.log(data);
    });
  }
}
