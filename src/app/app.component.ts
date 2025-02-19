import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/header/header.component';
import { JourneyComponent } from './Components/journey/journey.component';

import { SkillsComponent } from './Components/skills/skills.component';
import { FeaturedProjectsComponent } from './Components/featured-projects/featured-projects.component';
import { ContactComponent } from './Components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,JourneyComponent,SkillsComponent,FeaturedProjectsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfilio';
}
