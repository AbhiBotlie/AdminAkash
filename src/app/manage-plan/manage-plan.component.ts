import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-plan',
  templateUrl: './manage-plan.component.html',
  styleUrls: ['./manage-plan.component.css']
})
export class ManagePlanComponent implements OnInit{

  dataSource = new Array<any>();
  managePlansColumns=["srno", "Packagename", "taxbenifit", "boldlisting", "verified", "adpromotion", "amount", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
