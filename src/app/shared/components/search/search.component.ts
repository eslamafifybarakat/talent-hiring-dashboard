import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isLoadingSearch: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  clearSearchValue(search: any): void {
    search.value = '';
  }
}
