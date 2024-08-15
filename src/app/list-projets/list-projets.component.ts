import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-list-projets',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-projets.component.html',
  styleUrl: './list-projets.component.scss'
})
export class ListProjetsComponent implements OnInit {
  projets: any[] = [];

  constructor(private projetService: ProjetService, private router: Router) {}

  ngOnInit() {
    this.projets = this.projetService.getProjets();
  }

  goToProjet(id: number) {
    this.router.navigate(['/shoot', id]);
  }
}
