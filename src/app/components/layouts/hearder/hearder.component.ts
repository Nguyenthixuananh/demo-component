import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent implements OnInit {

  menus = ["Home", "Posts", "About"]


  constructor() { }

  ngOnInit(): void {
  }

}
