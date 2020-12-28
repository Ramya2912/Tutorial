import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  model: any = {};
  showRegistered = false;
  training = "ONLINE TRAINING";
  onSubmit() {
    this.showRegistered = true;
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
