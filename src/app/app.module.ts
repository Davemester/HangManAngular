import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterTilesComponent } from './components/letter-tiles/letter-tiles.component';
import { GuessArrayComponent } from './guess-array/guess-array.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { DrawHangmanComponent } from './components/draw-hangman/draw-hangman.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterTilesComponent,
    GuessArrayComponent,
    InfoBlockComponent,
    DrawHangmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
