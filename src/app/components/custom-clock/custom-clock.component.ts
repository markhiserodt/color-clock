import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorTimeService } from '../../services/color-time.service';

@Component({
  selector: 'app-custom-clock',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-clock.component.html',
  styleUrl: './custom-clock.component.scss'
})
export class CustomClockComponent {
  private colorTimeService = inject(ColorTimeService);
  
  protected color = '';
  protected hour = 0;
  protected minutes = 0;
  protected cycle = false;

  ngOnInit(): void {
    this.getColor();
    setInterval(this.getColor, 1000);
  }

  getColor = () => {
    if (this.cycle) {
      this.hour = (this.hour + 1) % 24; 
      this.minutes = (this.minutes) % 60;
    }
    this.color = this.colorTimeService.colorInTime(this.hour, this.minutes);
  }

}
