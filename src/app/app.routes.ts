import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {AnunciosComponent} from './anuncios/anuncios.component'
import {DetalheAnuncioComponent} from './detalhe-anuncio/detalhe-anuncio.component'
import {CriarAnuncioComponent} from './criar-anuncio/criar-anuncio.component'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'anuncios', component: AnunciosComponent},
  {path: 'anuncios/:id', component: DetalheAnuncioComponent},
  {path: 'criar-anuncio', component: CriarAnuncioComponent}
]
