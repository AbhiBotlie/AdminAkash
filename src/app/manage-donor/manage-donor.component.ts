import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-donor',
  templateUrl: './manage-donor.component.html',
  styleUrls: ['./manage-donor.component.css']
})
export class ManageDonorComponent {

  dataSource = new Array<any>();
  
  manageDonorColumns=["srno", "name", "email", "phone", "amount", "lastcontributiondate", "causecategory", "city", "country"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
