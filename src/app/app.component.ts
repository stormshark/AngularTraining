import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>ToDo App</h1>
    <div>
      <label for="">Work</label>
      <input[(ngModel)]="work" >
      <button>Save</button>
    </div>
    <hr />
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  work: string = '';
}
