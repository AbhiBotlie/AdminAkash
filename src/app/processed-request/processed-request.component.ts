import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-processed-request',
  templateUrl: './processed-request.component.html',
  styleUrls: ['./processed-request.component.css']
})
export class ProcessedRequestComponent {

  dataSource = new Array<any>();
  
  recievedRequestColumns=["srno", "cname", "cid", "campname", "emailid", "balanceamount", "requestedamount", "pendingverification", "delete", "edit", "view", "status"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
