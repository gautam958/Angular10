import { Component, OnInit } from '@angular/core';
import { RxjsService } from './rxjs.service';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RXJSComponent implements OnInit {
  photoUrl: string;
  constructor(private photosService: RxjsService) {
     this.fetchPhoto();
  }
  onClick() {
     this.fetchPhoto();
  }
  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
      console.log(response.urls.regular);
    });
  }
  ngOnInit(): void {}
}
