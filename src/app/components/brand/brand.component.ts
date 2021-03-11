import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brand1 = { brandId: 1, brandName: 'BMV' };
  brand2 = { brandId: 2, brandName: 'Mercedes' };
  brand3 = { brandId: 3, brandName: 'Tesla' };
  brand4 = { brandId: 4, brandName: 'Mazda' };
  brands = [this.brand1, this.brand2, this.brand3];

  constructor() {}

  ngOnInit(): void {}
}
