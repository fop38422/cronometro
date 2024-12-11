import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crono',
  standalone: true,
  imports: [],
  templateUrl: './crono.component.html',
  styleUrl: './crono.component.css'
})
export class CronoComponent {
  public contador: number = 0;
  public pausa: boolean = true;

  constructor(private router: Router){}

  goToMenu(){
    this.router.navigate(['']);
  }

  async play(){
    this.pausa = false;
    await new Promise(f => setTimeout(f, 1000));
    while (!this.pausa) {
      this.contador++;
      await new Promise(f => setTimeout(f, 1000));
    }
  }

  pause(){
    this.pausa = true;
  }
}
