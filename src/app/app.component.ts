import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cronometro';

  public static primeraVez: boolean = true;

  constructor (private router: Router){}

  toolbarCrono(){
    this.router.navigate(['/crono']);
  }

  toolbarSaludo(){
    this.router.navigate(['/saludo']);
  }
}
