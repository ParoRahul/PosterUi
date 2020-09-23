import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AvaterService } from '../../service/avater.service';

@Component({
  selector: 'app-leftarea',
  templateUrl: './leftarea.component.html',
  styleUrls: ['./leftarea.component.css']
})
export class LeftareaComponent implements OnInit, AfterViewInit {

  @ViewChild('avatarImg', { static: false }) element: ElementRef;

  constructor( private avatarService: AvaterService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
