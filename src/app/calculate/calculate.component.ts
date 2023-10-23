import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  latitude: number = 21.1702;
  longitude: number = 72.8311;
  selectedSpot: string = 'Easter Island';
  cyclingSpeed: number = 15;
  dailyCyclingHours: number = 4;
  estimatedTime: number | null = 0;
  errorMessage: string = '';


  constructor(private api: ApiService) { 
    this.api.authenticate("hareshnarola", "haresh05").subscribe((response: any) => {
      this.api.setAuthToken(response.token);
    });
  }

  onSubmit() {
    const data = {
      latitude: this.latitude,
      longitude: this.longitude,
      selectedSpot: this.selectedSpot,
      cyclingSpeed: this.cyclingSpeed,
      dailyCyclingHours: this.dailyCyclingHours
    };

    

    

    this.api.calculateCyclingTime(data).subscribe((result: any) => {
      this.estimatedTime = result.estimatedTime;
      this.errorMessage = result.error;
    },
    (error) => {
      console.log("cosm");
      this.estimatedTime = 0; // Clear the estimated time
      
       // Store the error message
    }
    );

    // In your component

    


  }
}
