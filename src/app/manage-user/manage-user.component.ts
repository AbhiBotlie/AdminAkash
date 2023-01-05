import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit{
 displayedColumnsuser=["srno","User Id","User Type","Email", "view"];
 dataSource = new Array<any>();
 constructor(private service:AdminService){}
 ngOnInit(): void {
  this.service.getAllCampaignerData().subscribe((res:any)=>{
    this.dataSource = res;
  })
}
}