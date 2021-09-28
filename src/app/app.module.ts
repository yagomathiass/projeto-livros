import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosModule } from './livros';

@NgModule({
  declarations: [
    AppComponent
  ],

//aqui informamos os modulos criados
  imports: [
    BrowserModule, 
    AppRoutingModule,
    LivrosModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
