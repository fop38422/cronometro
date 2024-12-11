import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router){}

  goToSaludo(){
    this.router.navigate(['/saludo']);
  }

  goToCrono(){
    this.router.navigate(['/crono']);
  }
}
