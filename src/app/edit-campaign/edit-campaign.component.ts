import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})
export class EditCampaignComponent {

  dataSource = new Array<any>();
  editCampaignColumns=["srno", "cid", "category", "amount", "status", "plan", "amount", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
