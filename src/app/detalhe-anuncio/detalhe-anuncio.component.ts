import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {AnunciosService} from '../anuncios/anuncios.service'
import {Anuncio} from '../anuncios/anuncio/anuncio.model'

@Component({
  selector: 'mt-detalhe-anuncio',
  templateUrl: './detalhe-anuncio.component.html'
})


export class DetalheAnuncioComponent implements OnInit {

  anuncio: Anuncio[]

  constructor(private anunciosService: AnunciosService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.anunciosService.anunciosById(this.route.snapshot.params['id'])
    .subscribe(anuncio => this.anuncio = anuncio)
  }

}
