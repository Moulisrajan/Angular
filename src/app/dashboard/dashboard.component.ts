import { Component,OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit
{



constructor(private passengerService:PassengerService){}
passenger:any[]=[];
ngOnInit(){
   this.passengerService.getpassenger().subscribe((data)=>{
    this.passenger=data;
  });
}
}
