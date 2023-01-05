import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-rejected-request',
  templateUrl: './rejected-request.component.html',
  styleUrls: ['./rejected-request.component.css']
})
export class RejectedRequestComponent {

  dataSource = new Array<any>();
  
  recievedRequestColumns=["srno", "cname", "cid", "campname", "emailid", "balanceamount", "requestedamount", "pendingverification", "delete", "edit", "view", "status"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
