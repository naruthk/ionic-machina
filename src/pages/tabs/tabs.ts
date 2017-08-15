import { Component } from '@angular/core';

import { AcademicPage } from '../academic/academic';
import { SportsPage } from '../sports/sports';
import { MoviesPage } from '../movies/movies';
import { InformationPage } from '../information/information';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AcademicPage;
  tab3Root = SportsPage;
  tab4Root = MoviesPage;
  tab5Root = InformationPage;

  constructor() {

  }
}
