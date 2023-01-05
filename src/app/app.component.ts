import { Component, Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Admin-UI';

  task1 = new Array<any>();
  task2 = new Array<any>();
  task3 = new Array<any>();

  selectedOption: any;
  constructor(private admin: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getTaskValue();
    throw new Error('Method not implemented.');
  }
  getTaskValue() {
    this.task1 = this.admin.task1;
    this.task2 = this.admin.task2;
    this.task3 = this.admin.task3;
    throw new Error('Method not implemented.');
  }

  onChange(event: any) {
    this.selectedOption = event.target.value;
    if (this.selectedOption == "Create Role") {
      this.router.navigate(['createrole']);
    }
    if (this.selectedOption == "Assign Task") {
      this.router.navigate(['assigntask']);
    }
    if (this.selectedOption == "Assign Role") {
      this.router.navigate(['assignrole']);
    }
    return false;
  }

  navigate(event: any) {
    this.selectedOption = event.target.value;
    if (this.selectedOption == "Create Campaign") {
      this.router.navigate(['createcampaign']);
    }
    if (this.selectedOption == "Edit Campaign") {
      this.router.navigate(['editcampaign']);
    }
    if (this.selectedOption == "View Campaign") {
      this.router.navigate(['viewcampaign']);
    }
    if (this.selectedOption == "Hide Campaign") {
      this.router.navigate(['hidecampaign']);
    }
    if (this.selectedOption == "Delete Campaign") {
      this.router.navigate(['deletecampaign']);
    }
    return false;
  }
  withdrawlRequest(event: any){
    this.selectedOption = event.target.value;
    if (this.selectedOption == "All Request") {
      this.router.navigate(['allrequest']);
    }
    if (this.selectedOption == "Recieved Request") {
      this.router.navigate(['recievedrequest']);
    }
    if (this.selectedOption == "Rejected Request") {
      this.router.navigate(['rejectedrequest']);
    }
    if (this.selectedOption == "Processed Request") {
      this.router.navigate(['processedrequest']);
    }
    if (this.selectedOption == "Approved Request") {
      this.router.navigate(['approvedrequest']);
    }
    if (this.selectedOption == "Hold Request") {
      this.router.navigate(['holdrequest']);
    }
    return false;
  }
}
