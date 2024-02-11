import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagePostsComponent } from './pages/page-posts/page-posts.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WrapperComponent, PagePostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gazeta-front';
}
