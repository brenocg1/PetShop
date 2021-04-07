import { Component, OnInit } from '@angular/core';
import { Housings } from 'src/app/Models/housings';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-housings-screen',
  templateUrl: './housings-screen.component.html',
  styleUrls: ['./housings-screen.component.css']
})
export class HousingsScreenComponent implements OnInit {

  constructor(private housingService:HousingService) { }

  housings!:Housings[];

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(){
    this.housingService.getHousings().subscribe((result) => {
      this.housings = result;
    });
  }
}
