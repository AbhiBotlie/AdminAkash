import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-account-detail',
  templateUrl: './manage-account-detail.component.html',
  styleUrls: ['./manage-account-detail.component.css']
})
export class ManageAccountDetailComponent {

  dataSource = new Array<any>();
  manageAccountDetailsColumns=["srno", "bankname", "accountno", "branchname", "selectpreferance",  "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
