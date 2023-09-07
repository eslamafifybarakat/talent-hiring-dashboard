import { PublicService } from './../../../../../shared/services/public.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {
  private unsubscribe: Subscription[] = [];
  isLoadingSearch: boolean = false;
  isSearch: boolean = false;
  isLoadingFileDownload: boolean = false;

  loadingIndicator: boolean = false;
  usersList: any;
  usersCount: number = 0;
  tableHeaders: any = [];

  page: number = 1;
  perPage: number = 5;
  pagesCount: number = 0;
  rowsOptions: number[] = [5, 10, 15, 30];

  enableSortFilter: boolean = true;
  searchKeyword: any = null;
  filtersArray: any = [];
  sortObj: any = {};

  constructor(
    private publicService: PublicService
  ) { }

  ngOnInit(): void {
    this.tableHeaders = [
      { field: 'full_name', header: this.publicService?.translateTextFromJson('dashboard.tableHeader.full_name'), title: this.publicService?.translateTextFromJson('dashboard.tableHeader.full_name'), sort: false, type: 'text', showImg: true },
      { field: 'email', header: this.publicService?.translateTextFromJson('dashboard.tableHeader.email'), title: this.publicService?.translateTextFromJson('dashboard.tableHeader.email'), sort: false, type: 'text' },
      { field: 'startDate', header: this.publicService?.translateTextFromJson('dashboard.tableHeader.startDate'), title: this.publicService?.translateTextFromJson('dashboard.tableHeader.startDate'), sort: false, type: 'date' },
      { field: 'role', header: this.publicService?.translateTextFromJson('dashboard.tableHeader.role'), title: this.publicService?.translateTextFromJson('dashboard.tableHeader.role'), sort: false, type: 'text' },
      { field: 'status', header: this.publicService?.translateTextFromJson('dashboard.tableHeader.status'), title: this.publicService?.translateTextFromJson('dashboard.tableHeader.status'), sort: false, type: 'status' },
    ];
    this.usersList = [{
      full_name: 'Mohamed Ali', email: 'mohamedAli55@gmail.com', image: 'assets/images/userprofile.jpg', startDate: new Date(), role: 'Ui/Ux design', status: 'active', class: 'active'
    },
    {
      full_name: 'Ahmed Ali', email: 'ahmedAli55@gmail.com', image: 'assets/images/dummy/user1.svg', startDate: new Date(), role: 'Ui/Ux design', status: 'pending', class: 'qualified'
    },
    {
      full_name: 'marwan Ali', email: 'marwanAli55@gmail.com', image: 'assets/images/dummy/user2.svg', startDate: new Date(), role: 'Ui/Ux design', status: 'active', class: 'active'
    },
    {
      full_name: 'Mohamed Ali', email: 'Mohamedali55@gmail.com', image: 'assets/images/userprofile.jpg', startDate: new Date(), role: 'Ui/Ux design', status: 'pending', class: 'pending'
    },
    {
      full_name: 'Mohamed Ali', email: 'ali55@gmail.com', image: 'assets/images/dummy/user2.svg', startDate: new Date(), role: 'Ui/Ux design', status: 'leave', class: 'leave'
    },
    {
      full_name: 'Mohamed Ali', email: 'ali55@gmail.com', image: 'assets/images/userprofile.jpg', startDate: new Date(), role: 'Ui/Ux design', status: 'pending', class: 'qualified'
    },
    ];
    this.usersCount = this.usersList?.length;
  }

}
