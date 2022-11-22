import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hibyte-project';

  constructor(private router: Router) {}

  onClick(path: string) {
    this.router.navigate(['/', path]).then((nav) => {
      console.log('works');
    });
  }
}
