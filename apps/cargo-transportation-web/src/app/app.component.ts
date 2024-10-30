import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '@programmerglasses/domain';
import { ButtonComponent, LoaderComponent } from '@programmerglasses/ui-kit';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, LoaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cargo-transportation-web';
  user: User = {
    firstName: '',
    lastName: '',
    age: 0,
  };
}
