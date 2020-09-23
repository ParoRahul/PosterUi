import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addprojects',
  templateUrl: './addprojects.component.html',
  styleUrls: ['./addprojects.component.css']
})
export class AddprojectsComponent implements OnInit {

  projectCount: number;

  constructor() {
    this.projectCount = 0;
   }

  ngOnInit(): void {
  }

}
