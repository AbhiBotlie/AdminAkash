import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-campaigner',
  templateUrl: './manage-campaigner.component.html',
  styleUrls: ['./manage-campaigner.component.css']
})
export class ManageCampaignerComponent {

  manageCampaignerColumns=["Sr.no","Type","Id","Name","Email","Contact Details","Raised","Required","Days Left","Category","Location", "view"]
  dataSource=new Array<any>();
  
  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
