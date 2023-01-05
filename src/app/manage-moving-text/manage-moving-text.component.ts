import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-moving-text',
  templateUrl: './manage-moving-text.component.html',
  styleUrls: ['./manage-moving-text.component.css']
})
export class ManageMovingTextComponent implements OnInit{
  
  dataSource=new Array<any>();
  manageMovingTextColumns=["srno", "formname", "templates", "text", "active", "view"]
  constructor(private service:AdminService){}
  ngOnInit(): void {
    this.service.getAllAdminData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
