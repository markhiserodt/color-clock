import { Component, inject } from '@angular/core';
import { ColorTimeService } from '../../services/color-time.service';

@Component({
  selector: 'app-color-clock',
  standalone: true,
  imports: [],
  templateUrl: './color-clock.component.html',
  styleUrl: './color-clock.component.scss'
})
export class ColorClockComponent {
  private colorTimeService = inject(ColorTimeService);

  protected color = '';

  ngOnInit(): void {
    this.getColor();
    setInterval(this.getColor, 10000);
  }

  getColor = () => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    this.color = this.colorTimeService.colorInTime(hour, minutes);
  }

}
