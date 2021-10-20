import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'router-demo';

  constructor(private router: Router){}

  navigateToContact(){
    this.router.navigate(['/contact'])
  }
}
