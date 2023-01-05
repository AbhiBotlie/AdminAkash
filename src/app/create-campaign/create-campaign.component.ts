import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent {

  dataSource = new Array<any>();
  
  editCampaignColumns=["srno", "cid", "category", "amount", "status", "plan", "amount", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
