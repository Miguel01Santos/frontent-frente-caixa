import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialMediaConnectionsComponent } from './shared/components/social-media-connections/social-media-connections.component';
import { FormTelaLoginComponent } from "./shared/components/form-tela-login/form-tela-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialMediaConnectionsComponent, FormTelaLoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontent-frente-caixa';
}
