import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
interface Skill {
  title: string;
  type: string;
  icon: SafeHtml; // Utilisation de SafeHtml pour les icônes
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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


}
