import { Component, OnInit } from '@angular/core';
import { Anuncio } from './anuncio/anuncio.model'
import {AnunciosService} from './anuncios.service'

@Component({
  selector: 'mt-anuncios',
  templateUrl: './anuncios.component.html'
})
export class AnunciosComponent implements OnInit {

  anuncios: Anuncio[]

  constructor(private anunciosService: AnunciosService) { }

  ngOnInit() {
    this.anunciosService.anuncios()
      .subscribe(anuncios => this.anuncios = anuncios)
  }

}
