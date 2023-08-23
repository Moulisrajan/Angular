import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
   
  email = 'Moulis';
  password = '1913';
  public GetText(){
    return 'string from service';
  }

  Temperature=[
    {City:'Delhi',degree:'23.7'},
    {City:'TamilNadu',degree:'26.7'},
    {City:'Mumbai',degree:'25.6'},
    {City:'Dubai',degree:'21.9'},
  ]

   public temperature(){
    return this.Temperature;
   }


}
