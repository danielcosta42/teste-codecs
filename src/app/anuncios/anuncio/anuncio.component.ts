import { Component, OnInit, Input } from '@angular/core';
import { Anuncio } from './anuncio.model'

@Component({
  selector: 'mt-anuncio',
  templateUrl: './anuncio.component.html'
})
export class AnuncioComponent implements OnInit {

  @Input() anuncio: Anuncio

  constructor() { }

  ngOnInit() {
  }

}
