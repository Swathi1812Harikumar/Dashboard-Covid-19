import { Component, OnInit } from '@angular/core';
import { CoronaserviceService } from 'src/app/coronaservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'covidreport';
  countries: string;
  country: string;
  confirmed: number;
  recovered: number;
  deaths: number;

  constructor(private corona: CoronaserviceService) {}

  ngOnInit(): void {
    this.corona.getCountries().subscribe((data) => {
      console.log(data);
      this.countries = data;
    });
  }

  getTheData() {
    this.corona.getCoronaCurrentData(this.country).subscribe((data) => {
      console.log(data);
      const index = data.length - 1;
      this.confirmed = data[index].Confirmed;
      this.recovered = data[index].Recovered;
      this.deaths = data[index].Deaths;
    });
  }

  getCountry(country: string) {
    this.country = country;
  }
}
