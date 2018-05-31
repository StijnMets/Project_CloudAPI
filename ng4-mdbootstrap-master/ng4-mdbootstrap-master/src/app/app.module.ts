import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StarWarsService } from './services/starwars.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListComponent } from './peoplelist/peoplelist.component';
import { RouterModule} from '@angular/router';
import { PeopledetailComponent } from './peopledetail/peopledetail.component';
import { PlanetListComponent } from './planetlist/planetlist.component';
import { MovieListComponent } from './movielist/movielist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PeopleListComponent,
    PeopledetailComponent,
    PlanetListComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'peoplelist', component: PeopleListComponent},
      { path: 'peopledetail', component: PeopledetailComponent},
      { path: 'planetlist', component: PlanetListComponent},
      { path: 'movielist', component: MovieListComponent},
      { path: '', redirectTo: 'peoplelist', pathMatch: 'full'}
    ], { useHash: true }),
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
