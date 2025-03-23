import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  SECONDS_IN_DAY = 8;
  
  color = 'rgb(255, 0, 0)';

  ngOnInit(): void {
    setInterval(this.changeBackgroundColor, 1000);
  }

  changeBackgroundColor = () => {
    const third = this.SECONDS_IN_DAY/3;

    this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }

}
