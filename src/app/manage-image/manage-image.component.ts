import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-image',
  templateUrl: './manage-image.component.html',
  styleUrls: ['./manage-image.component.css']
})
export class ManageImageComponent {

  dataSource = new Array<any>();
  manageImagesColumns=["srno", "image", "selectedimage", "view"]

  constructor(private service:AdminService){}
  
  ngOnInit(): void {
    this.service.getAllCampaignerData().subscribe((res:any)=>{
      this.dataSource = res;
    })
    
  }
}
