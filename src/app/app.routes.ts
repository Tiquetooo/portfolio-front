import { Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { ListProjetsComponent } from './list-projets/list-projets.component';
import { ProjetComponent } from './projet/projet.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'shoots', component: ListProjetsComponent},
    { path: 'shoot/:id', component: ProjetComponent},
    { path: 'projet', component: ProjetComponent},
    { path: 'tiqueto', component: AboutComponent}
];