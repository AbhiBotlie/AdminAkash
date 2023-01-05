import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.css']
})
export class ViewCampaignComponent {

  dataSource = new Array<any>();
  editCampaignColumns=["srno", "cid", "category", "amount", "status", "plan", "amount", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
