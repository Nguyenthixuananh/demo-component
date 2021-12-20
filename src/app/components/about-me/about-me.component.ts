import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  user = {
    name: "Xuan Anh",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZ7XtD8tmSee26ngX8pPdDdIa_yyENAR5Xw&usqp=CAU"
  }

  hidenInputUser = true;

  constructor() { }

  ngOnInit(): void {
  }

  showInputUser(){
    this.hidenInputUser = !this.hidenInputUser;
  }

}
