import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { WikiSearchRoutingModule } from './wiki-search-routing.module';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';
import { PagelistComponent } from './component/pagelist/pagelist.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';


@NgModule({
  declarations: [WikiSearchComponent,
    SearchbarComponent,
    PagelistComponent 
  ],
  imports: [
    CommonModule,
    WikiSearchRoutingModule 
  ]
})
export class WikiSearchModule { }
