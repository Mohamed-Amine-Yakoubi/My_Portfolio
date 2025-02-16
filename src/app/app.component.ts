import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { JourneyComponent } from './Components/journey/journey.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,JourneyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfilio';
}
