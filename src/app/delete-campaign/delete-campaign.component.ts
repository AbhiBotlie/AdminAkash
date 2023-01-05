import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-campaign',
  templateUrl: './delete-campaign.component.html',
  styleUrls: ['./delete-campaign.component.css']
})
export class DeleteCampaignComponent {

  dataSource = new Array<any>();
  editCampaignColumns=["srno", "cid", "category", "amount", "status", "plan", "amount", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
