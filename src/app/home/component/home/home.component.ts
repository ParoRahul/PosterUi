import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

import * as selection from 'd3-selection';
import * as hierarchy from 'd3-hierarchy';
import * as fetch from 'd3-fetch';
import { HompageDataService } from '../../service/hompage-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public headingText: string;

  /* public showLoginCompoent: boolean; */

  private svgElement: selection.Selection<SVGElement, any, any, any>;

  constructor( public service: HompageDataService) { }

  ngOnInit(): void {
    /* this.showLoginCompoent = false; */
    this.headingText = 'Transform your Papar into Scientific Poster';
    /* this.svgElement = selection.select('#svgContainer').append('svg')
                        .attr('width', 1200)
                        .attr('height', 400)
                        .style('background-color', '#fff')
                        .append('g');
    fetch.xml('assets/layout.svg')
    .then((data: any) => {
          console.log(data);
          this.svgElement.append(data.documentElement);
    }); */
  }

  /* onlogIntriggered(){
    if (this.showLoginCompoent){
        this.showLoginCompoent = false;
    } else {
      this.showLoginCompoent = true;
    }
    // console.log(this.showLoginCompoent);
  } */

}
