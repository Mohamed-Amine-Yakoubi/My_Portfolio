import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-journey',
  standalone: true, // If using Angular standalone components

  imports: [CommonModule],
  templateUrl: './card-journey.component.html',
  styleUrl: './card-journey.component.scss',
})
export class CardJourneyComponent {
  cards: any[] = [];
  isExpanded: boolean = false;  // To track the state of "See More" or "See Less"
  Button_less: boolean = true;  // Assuming you have this flag to show/hide tasks


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDataJourney().subscribe((data) => {
      this.cards = data.Journey;
    });
  }

  expandedId: number | null = null;

  toggleShow(cardId: number) {
    this.expandedId = this.expandedId === cardId ? null : cardId;
  }
}
