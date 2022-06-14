import { Component } from '@angular/core';
import { faPython } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'mk-portfolio';
  faPython = faPython;
}
