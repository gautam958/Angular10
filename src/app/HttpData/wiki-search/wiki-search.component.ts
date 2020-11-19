import { JsonPipe } from '@angular/common';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component,Injectable, OnInit } from '@angular/core';
import { WikipediaService } from '../service/wikipedia.service';

// make seprate container for new instance 
@Injectable({providedIn:'root'}) 


@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {

  pagesdata=[];

  constructor(private wikisearch:WikipediaService) { }

  ngOnInit(): void {
  }

  onTerm(term:string)
  {
    //console.log( " term received from child "+ term);
    // const result= this.wikisearch.search(term);
    // console.log(' result  '+ JSON.stringify(result));
  
    this.wikisearch.search(term).subscribe((pages) =>{
     // console.log(Response);
     this.pagesdata=pages;

    });

  }

}
