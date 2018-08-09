import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AboutComponent } from './components/about/about.component';
import { VideosComponent } from './components/videos/videos.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SlideShowComponent } from './shared/components/slide-show/slide-show.component';
import { LeftPanelComponent } from './shared/components/left-panel/left-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoriesComponent,
    AboutComponent,
    VideosComponent,
    HeaderComponent,
    SlideShowComponent,
    LeftPanelComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
