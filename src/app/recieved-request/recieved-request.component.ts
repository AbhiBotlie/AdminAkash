import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-recieved-request',
  templateUrl: './recieved-request.component.html',
  styleUrls: ['./recieved-request.component.css']
})
export class RecievedRequestComponent {

  dataSource = new Array<any>();
  
  recievedRequestColumns=["srno", "cname", "cid", "campname", "emailid", "balanceamount", "requestedamount", "pendingverification", "view", "status"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
