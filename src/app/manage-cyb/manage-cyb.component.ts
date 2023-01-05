import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-cyb',
  templateUrl: './manage-cyb.component.html',
  styleUrls: ['./manage-cyb.component.css']
})
export class ManageCYBComponent implements OnInit{

  dataSource = new Array<any>();
  
  manageCybColumns=["srno", "name", "email", "contact", "amount", "lastcontributiondate", "causecategory", "city", "country"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
