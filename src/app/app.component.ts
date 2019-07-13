import { Component } from '@angular/core';
/* {@Component} - Each component defines a class which conatains data and logic
   And typically contains a class, template, and meta data (Such as a decorator)
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-dashboard';
}
