import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-clock',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-clock.component.html',
  styleUrl: './custom-clock.component.scss'
})
export class CustomClockComponent {
  protected color = '';
  protected hour = 0;
  protected minutes = 0;
  protected cycle = false;

  private reds   = [ 255,  255,   -1,   0,  0, -1];
  private greens = [  0, -1, 255,  255,   -1,   0];
  private blues  = [   -1,   0,  0, -1, 255,  255];

  ngOnInit(): void {
    this.colorInTime();
    setInterval(this.colorInTime, 1000);
  }

  protected colorInTime = () => {
    const now = new Date()
    const hour = this.hour;
    const minutes = this.minutes % 60;
    const section = Math.floor(hour / 4);

    const red = this.reds[section] === -1 ? this.adjustValue(hour, minutes, section) : this.reds[section];
    const green = this.greens[section] === -1 ? this.adjustValue(hour, minutes, section) : this.greens[section];
    const blue = this.blues[section] === -1 ? this.adjustValue(hour, minutes, section) : this.blues[section];

    this.color = `rgb(${red}, ${green}, ${blue})`;
    console.log(`${hour}:${minutes} ${this.color}`);

    if (this.cycle) {
      this.hour = (this.hour + 1) % 24; 
      this.minutes = (this.minutes) % 60;
    }
  }

  private adjustValue(hour: number, minutes: number, section: number) {
    return section % 2 === 1 ?
      (hour - section * 4) * 64 + Math.floor(minutes * (64 / 60)) :
      255 - ((hour - section * 4) * 64 + Math.ceil(minutes * (64 / 60)))
  }
}
