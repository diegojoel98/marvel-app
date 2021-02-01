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
import { CommentComponent } from './components/comment/comment.component';
import { SearchCommentComponent } from './components/search-comment/search-comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

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
  { path: 'foro/comentario/:id', component: CommentComponent },
  { path: 'foro/buscar-comentario/:query', component: SearchCommentComponent },
  { path: 'foro/crear-comentario', component: CreateCommentComponent },
  { path: 'foro/editar-comentario/:id', component: CommentEditComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrarse', component: RegisterComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
