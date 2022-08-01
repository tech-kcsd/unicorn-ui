import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() currentRoute!: string;
  constructor() { }

  ngOnInit(): void { }

}