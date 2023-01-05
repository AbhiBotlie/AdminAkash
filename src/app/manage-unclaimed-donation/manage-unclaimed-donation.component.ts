import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-unclaimed-donation',
  templateUrl: './manage-unclaimed-donation.component.html',
  styleUrls: ['./manage-unclaimed-donation.component.css']
})
export class ManageUnclaimedDonationComponent {

  dataSource = new Array<any>();
  manageUnclainedDonationColumns=["srno", "causecategory", "amount", "status", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
