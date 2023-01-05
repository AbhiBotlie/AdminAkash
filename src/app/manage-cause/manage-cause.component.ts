import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-cause',
  templateUrl: './manage-cause.component.html',
  styleUrls: ['./manage-cause.component.css']
})
export class ManageCauseComponent {

  dataSource = new Array<any>();
  manageCauseColumns=["srno", "category", "subcategory", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
