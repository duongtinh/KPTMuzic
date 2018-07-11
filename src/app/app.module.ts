import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AboutComponent } from './components/about/about.component';
import { VideosComponent } from './components/videos/videos.component';
import {NglModule} from 'ng-lightning/ng-lightning';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoriesComponent,
    AboutComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    NglModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
