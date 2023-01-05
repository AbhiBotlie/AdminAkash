import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-social-handles',
  templateUrl: './social-handles.component.html',
  styleUrls: ['./social-handles.component.css']
})
export class SocialHandlesComponent {

  dataSource = new Array<any>();
  
  socialHandelColumns=["srno", "social", "delete", "edit", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
