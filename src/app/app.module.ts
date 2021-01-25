import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination'; // Paginación
import { MomentModule } from 'angular2-moment'; // Formatear fecha
import { AngularFileUploaderModule } from 'angular-file-uploader'; // Subir imagenes comentarios
import { QRCodeModule } from 'angularx-qrcode'; // Generar códigos qr
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ComicsComponent } from './components/comics/comics.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ComicPageComponent } from './components/comic-page/comic-page.component';
import { PersonajesPageComponent } from './components/personajes-page/personajes-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { VistaComicComponent } from './components/vista-comic/vista-comic.component';
import { VistaPersonajeComponent } from './components/vista-personaje/vista-personaje.component';
import { ForoComponent } from './components/foro/foro.component';
import { CommentComponent } from './components/comment/comment.component';
import { SearchCommentComponent } from './components/search-comment/search-comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ComicsComponent,
    PersonajesComponent,
    ContactoComponent,
    BusquedaComponent,
    ComicPageComponent,
    PersonajesPageComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeComponent,
    VistaComicComponent,
    VistaPersonajeComponent,
    ForoComponent,
    CommentComponent,
    SearchCommentComponent,
    CreateCommentComponent,
    CommentEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    MomentModule,
    AngularFileUploaderModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
