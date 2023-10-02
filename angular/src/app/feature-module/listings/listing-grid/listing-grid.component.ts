import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { Options } from '@angular-slider/ngx-slider';
import { DataService } from 'src/app/shared/services/data/data.service';
import { listingGrid } from 'src/app/shared/services/model/model';
interface data {
  value: string ;
}
@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css']
})
export class ListingGridComponent {
  public selectedValue1 !: string;
  public selectedValue2 !: string;
  public selectedValue3 !: string;
  public listingGrid: listingGrid[] = [];


  
  constructor(private data: DataService) {
    this.listingGrid = this.data.listingGrid;
  }

  public routes = routes;

  slidevalue = 55;
  options: Options = {
    floor: 0,
    ceil: 100,
  };

  selectedList1: data[] = [
    { value: '5' },
    { value: '10' },
    { value: '15' },
    { value: '20' },
  ];
  selectedList2: data[] = [
    { value: 'Low to High' },
    { value: 'High to Low' },
  ];
  selectedList3: data[] = [
    { value: 'Popular' },
    { value: 'Toyota Camry SE 350' },
    { value: 'Audi A3 2019 new' },
    { value: 'Ferrari 458 MM Speciale' },
    { value: 'Chevrolet Camaro' },
    { value: 'Acura Sport Version' },
  ];
}
