import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstant } from './appconstants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllAdminData(){
      return this.http.get(AppConstant.API_BASE_URL+"admin/get");
  }

  getAllCampaignerData(){
    return this.http.get(AppConstant.API_BASE_URL+"campaigner/get");
  }

  task1 = [
    {value: "Create Role"},
    {value: "Assign Task"},
    {value: "Assign Role"}
  ]
  task2 =[
    {value: "Create Campaign"},
    {value: "Edit Campaign"},
    {value: "View Campaign"},
    {value: "Hide Campaign"},
    {value: "Delete Campaign"}
  ]
  task3 =[
    {value: "All Request"},
    {value: "Recieved Request"},
    {value: "Rejected Request"},
    {value: "Processed Request"},
    {value: "Approved Request"},
    {value: "Hold Request"}
  ]

}
