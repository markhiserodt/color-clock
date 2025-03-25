import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected color = '';

  private reds   = [ 255,  -1,   0,   0,  -1, 255];
  private greens = [  -1, 255, 255,  -1,   0,   0];
  private blues  = [   0,   0,  -1, 255, 255,  -1];

  ngOnInit(): void {
    this.colorInTime();
    setInterval(this.colorInTime, 60000);
  }

  private colorInTime = () => {
    const now = new Date()
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const section = Math.floor(hour / 4);

    const red = this.reds[section] === -1 ? this.adjustValue(hour, minutes, section) : this.reds[section];
    const green = this.greens[section] === -1 ? this.adjustValue(hour, minutes, section) : this.greens[section];
    const blue = this.blues[section] === -1 ? this.adjustValue(hour, minutes, section) : this.blues[section];

    this.color = `rgb(${red}, ${green}, ${blue})`;
    console.log(`${hour}:${minutes} ${this.color}`);
  }

  private adjustValue(hour: number, minutes: number, section: number) {
    return section % 2 === 0 ?
      (hour - section * 4) * 64 + Math.floor(minutes * (64 / 60)) :
      255 - ((hour - section * 4) * 64 + Math.ceil(minutes * (64 / 60)))
  }

}