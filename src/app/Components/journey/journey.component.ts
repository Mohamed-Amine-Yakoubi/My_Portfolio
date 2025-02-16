import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-journey',
  imports: [CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
})
export class JourneyComponent {

  Experience: boolean = true;
  Education: boolean = false;

  ShowExperience() {
    this.Experience =true ;
    this.Education =false ;
  }
  ShowEducation() {
    this.Education =true ;
    this.Experience =false ;

  }
}
