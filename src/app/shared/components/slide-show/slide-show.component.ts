import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
	selector: 'app-slide-show',
	templateUrl: './slide-show.component.html',
	styleUrls: ['./slide-show.component.css'],
	providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: false , activeSlideIndex: 0} }
  ]
})
export class SlideShowComponent implements OnInit {

	slides = [
		{ image: 'assets/images/bg01.jpg' },
		{ image: 'assets/images/bg02.jpg' },
		{ image: 'assets/images/bg03.jpg' }
	];

	constructor() {
	}

	ngOnInit() {
	}

}
