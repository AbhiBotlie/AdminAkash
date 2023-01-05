import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrls: ['./approved-request.component.css']
})
export class ApprovedRequestComponent {

  dataSource = new Array<any>();
  
  recievedRequestColumns=["srno", "cname", "cid", "campname", "emailid", "balanceamount", "requestedamount", "pendingverification", "view", "status"]
  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
