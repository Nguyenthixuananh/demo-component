import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title: "Nhật ký ngày 19/12",
    date: "2021-12-19",
    desc: "Hôm nay học bài Angular Over View",
    user: "Xuan Anh"
  },
    {
      title: "Nhật ký ngày 20/12",
      date: "2021-12-20",
      desc: "Hôm nay học bài Component Interaction",
      user: "Xuan Anh"
    }
  ]
  title = 'demo-component-interaction';
}
