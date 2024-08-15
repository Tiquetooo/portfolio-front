import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private projets = [
    { id: 1, name: 'Effet Tunnel Radio', image: '/assets/img/1/projet1.jpg', images: ['/assets/img/1/projet1.jpg', 'assets/img/1/projet2.jpg', 'assets/img/1/projet3.jpg', 'assets/img/1/projet4.jpg', 'assets/img/1/projet5.jpg', 'assets/img/1/projet6.jpg', 'assets/img/1/projet7.jpg', 'assets/img/1/projet8.jpg', 'assets/img/1/projet9.jpg', 'assets/img/1/projet10.jpg'] },
    { id: 2, name: 'Down Town', image: '/assets/img/2/projet1.jpg', images: ['/assets/img/2/projet1.jpg', 'assets/img/2/projet2.jpg', 'assets/img/2/projet3.jpg', 'assets/img/2/projet4.jpg', 'assets/img/2/projet5.jpg', 'assets/img/2/projet6.jpg', 'assets/img/2/projet7.jpg', 'assets/img/2/projet8.jpg', 'assets/img/2/projet9.jpg', 'assets/img/2/projet10.jpg'] },
    { id: 3, name: 'Unchained', image: '/assets/img/3/projet1.jpg', images: ['/assets/img/3/projet1.jpg', 'assets/img/3/projet2.jpg', 'assets/img/3/projet3.jpg', 'assets/img/3/projet4.jpg', 'assets/img/3/projet5.jpg', 'assets/img/3/projet6.jpg', 'assets/img/3/projet7.jpg', 'assets/img/3/projet8.jpg', 'assets/img/3/projet9.jpg', 'assets/img/3/projet10.jpg'] },
    { id: 4, name: 'Open Air', image: '/assets/img/4/projet1.jpg', images: ['/assets/img/4/projet1.jpg', 'assets/img/4/projet2.jpg', 'assets/img/4/projet3.jpg', 'assets/img/4/projet4.jpg', 'assets/img/4/projet5.jpg', 'assets/img/4/projet6.jpg', 'assets/img/4/projet7.jpg', 'assets/img/4/projet8.jpg', 'assets/img/4/projet9.jpg', 'assets/img/4/projet10.jpg'] },
  ];

  constructor() {}

  getProjets() {
    return this.projets;
  }

  getProjetById(id: number) {
    return this.projets.find(projet => projet.id === id);
  }
}