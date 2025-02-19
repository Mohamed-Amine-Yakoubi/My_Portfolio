import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardJourneyComponent } from '../../Shared/card-journey/card-journey.component';
import { CardEducationComponent } from '../../Shared/card-education/card-education.component';


@Component({
  selector: 'app-journey',
  imports: [CommonModule,CardJourneyComponent,CardEducationComponent ],
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
