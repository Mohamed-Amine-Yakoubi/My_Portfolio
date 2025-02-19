import { Component } from '@angular/core';
import { CardsComponent } from '../../Shared/cards/cards.component';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-featured-projects',
  imports: [CardsComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {

   Image_AutoPro:string= "images/capture_autopro.png"
   Image_decoriat:string= "images/decoriat.png"
  Data: any = [];

  constructor(
    private dataservice: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.dataservice.getDataSkills().subscribe((data) => {
      this.Data = data.skills.map((skill: { icon: string }) => ({
        ...skill,
        icon: this.sanitizer.bypassSecurityTrustHtml(skill.icon),
      }));
    });
  }
  goToGitHub():void{
window.open('https://github.com/Mohamed-Amine-Yakoubi?tab=repositories','_blank')
  }
}
