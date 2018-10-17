import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covjest';
  constructor(private readonly router: Router) { }

  crisisClick() {
    this.router.navigate(['crisis-center']);
  }
}
