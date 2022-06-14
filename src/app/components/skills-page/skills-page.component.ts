import { Component, OnInit } from '@angular/core';
import { faPython, faJava, faGitAlt,faAngular, faLinux, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faA } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent implements OnInit {

  faPython = faPython;
  faJava = faJava;
  faGitAlt = faGitAlt;
  faAngular = faAngular;
  faLinux = faLinux;
  faHTML = faHtml5;
  
  constructor() { }

  ngOnInit(): void {
  }

}
