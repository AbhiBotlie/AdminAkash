import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-hide-campaign',
  templateUrl: './hide-campaign.component.html',
  styleUrls: ['./hide-campaign.component.css']
})
export class HideCampaignComponent {

  dataSource = new Array<any>();
  editCampaignColumns=["srno", "cid", "category", "amount", "status", "plan", "amount", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
