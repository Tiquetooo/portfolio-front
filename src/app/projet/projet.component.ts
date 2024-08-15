import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from '../services/projet.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss'
})
export class ProjetComponent implements OnInit {
  projetId!: number;
  projets: any[] = [];
  images: string[] = [];
  projet: any;

  constructor(private route: ActivatedRoute, private projetService: ProjetService) {}

  ngOnInit() {
    this.projets = this.projetService.getProjets();
    this.route.params.subscribe(params => {
      this.projetId = +params['id'];
      this.projet = this.projetService.getProjetById(this.projetId);
      this.images = this.projet ? this.projet.images : [];
    });
  }
}