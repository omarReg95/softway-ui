import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PathologieService } from 'src/app/service/pathologie/pathologie.service';

@Component({
  selector: 'app-pathologie-calculateur',
  templateUrl: './pathologie-calculateur.component.html',
  styleUrls: ['./pathologie-calculateur.component.scss']
})
export class PathologieCalculateurComponent {

  index!: number 
  error: string = ""
  reponse: string = ""
  constructor(private service: PathologieService) {

  }

  calculer() {
    if(this.index) {

      this.service.calculer(this.index).subscribe(res => {
        this.reponse = "Le client doit visiter l'unité(s) médicale(s) : <b>" + res.unite + "</b>";
        this.error = ""
      },
      err => {
        this.error = err?.error?.description
        this.reponse = ""
      })
    }
    else {
      this.error = "index est obligatoire pour le calcule, veuillez précisez la valeur de l'index."
      this.reponse = ""
    }
  }
}
