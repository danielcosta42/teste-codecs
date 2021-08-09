import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes'
import {ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { AnuncioComponent } from './anuncios/anuncio/anuncio.component';
import { AnunciosService } from './anuncios/anuncios.service';
import { DetalheAnuncioComponent } from './detalhe-anuncio/detalhe-anuncio.component';
import { CriarAnuncioComponent } from './criar-anuncio/criar-anuncio.component';
import {CriarAnunciosService} from './criar-anuncio/criaranuncio-service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AnunciosComponent,
    AnuncioComponent,
    DetalheAnuncioComponent,
    CriarAnuncioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AnunciosService, CriarAnunciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
