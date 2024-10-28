import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialMediaConnectionsComponent } from './shared/components/social-media-connections/social-media-connections.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialMediaConnectionsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontent-frente-caixa';
}
