import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { SaludoComponent } from './components/saludo/saludo.component';
import { CronoComponent } from './components/crono/crono.component';
import { MatToolbarModule } from '@angular/material/toolbar';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'saludo', component: SaludoComponent },
    { path: 'crono', component: CronoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), MatToolbarModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}