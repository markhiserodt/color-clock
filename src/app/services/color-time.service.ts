import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorTimeService {

  private reds   = [ 255,  255,   -1,   0,  0, -1];
  private greens = [  0, -1, 255,  255,   -1,   0];
  private blues  = [   -1,   0,  0, -1, 255,  255];

  colorInTime = (hour: number, minutes: number) => {
    const section = Math.floor(hour / 4);

    const r = this.reds[section] === -1 ? this.adjustValue(hour, minutes, section) : this.reds[section];
    const g = this.greens[section] === -1 ? this.adjustValue(hour, minutes, section) : this.greens[section];
    const b = this.blues[section] === -1 ? this.adjustValue(hour, minutes, section) : this.blues[section];

    const color = `rgb(${r}, ${g}, ${b})`;
    console.log(`${hour}:${minutes} ${color}`);
    return color;
  }

  private adjustValue(hour: number, minutes: number, section: number) {
    return section % 2 === 1 ?
      (hour - section * 4) * 64 + Math.floor(minutes * (64 / 60)) :
      255 - ((hour - section * 4) * 64 + Math.ceil(minutes * (64 / 60)))
  }

}
