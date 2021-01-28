import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicPageComponent } from './components/comic-page/comic-page.component';
import { PersonajesPageComponent } from './components/personajes-page/personajes-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { VistaPersonajeComponent } from './components/vista-personaje/vista-personaje.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VistaComicComponent } from './components/vista-comic/vista-comic.component';
import { ForoComponent } from './components/foro/foro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'comics', component: ComicPageComponent },
  { path: 'personajes', component: PersonajesPageComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'personaje/:id', component: VistaPersonajeComponent },
  { path: 'comic/:id', component: VistaComicComponent },
  { path: 'foro', component: ForoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
