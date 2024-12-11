import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AppRoutingModule } from '../../app.routes';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  

  constructor (private router: Router){}

  goToMenu(){
    this.router.navigate(['']);
  }

  ngAfterViewInit(): void {
    if (AppComponent.primeraVez == true) {
      alert("Hola, ¿qué tal estás?");
      AppComponent.primeraVez = false;
    } else {
      alert("Bienvenido de vuelta");
    }
  }
}
