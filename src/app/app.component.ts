import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
    email: ('joaquin@gmail.com'),
    role: 'admin'
  }
  title = 'my-app';
}
