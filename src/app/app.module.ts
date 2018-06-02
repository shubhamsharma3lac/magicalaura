import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PeriodicTableService } from './periodic-table.service';

const appRoutes : Routes =
[
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PeriodicTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
