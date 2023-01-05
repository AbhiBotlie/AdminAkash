import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-hospital',
  templateUrl: './manage-hospital.component.html',
  styleUrls: ['./manage-hospital.component.css']
})
export class ManageHospitalComponent {

  dataSource = new Array<any>();
  manageHospitalsColumns=["srno", "hospitalid", "hospitalname", "city/state", "email", "contact",  "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
