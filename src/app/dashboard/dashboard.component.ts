import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  collectionValues: string[] = ['Chennai - 32.6c', 'Bangalore- 26.4c', 'Mumbai-24.3c', 'Noida- 25-7c'];
}

