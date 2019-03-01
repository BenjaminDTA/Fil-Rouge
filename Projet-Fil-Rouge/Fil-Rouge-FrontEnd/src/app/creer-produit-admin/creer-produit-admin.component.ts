import { Component, OnInit } from '@angular/core';
import { Produit } from '../model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-creer-produit-admin',
  templateUrl: './creer-produit-admin.component.html',
  styleUrls: ['./creer-produit-admin.component.css']
})
export class CreerProduitAdminComponent implements OnInit {
  msg: string = "";
  produitNew: Produit = {
    nom: '',
    desc: '',
    prix: 0,
    categorie: '',
    sous_categorie: '',
    image: '',
    stock: 0,
    commande: null,
    actif: true,

  }
  constructor(private _srv: ProduitService) {
  }

  ngOnInit() {
  }

  creation() {
    console.log(this.produitNew)
    this._srv.creation(this.produitNew).subscribe(value => { this.msg = 'Enregistrement réussi.' }, error => { this.msg = "Erreur lors de l'enregistrement." });
  }

}