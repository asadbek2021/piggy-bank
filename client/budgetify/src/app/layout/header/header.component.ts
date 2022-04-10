import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() sideNavToggle: EventEmitter<any>= new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu():void {
    this.sideNavToggle.emit();
  }
}
