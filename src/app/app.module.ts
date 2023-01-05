import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageMovingTextComponent } from './manage-moving-text/manage-moving-text.component';
import { ManageCampaignerComponent } from './manage-campaigner/manage-campaigner.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { ManageImageComponent } from './manage-image/manage-image.component';
import { ManageHospitalComponent } from './manage-hospital/manage-hospital.component';
import { ManageCauseComponent } from './manage-cause/manage-cause.component';
import { ManageUnclaimedDonationComponent } from './manage-unclaimed-donation/manage-unclaimed-donation.component';
import { ManageAccountDetailComponent } from './manage-account-detail/manage-account-detail.component';
import { ManageDonorComponent } from './manage-donor/manage-donor.component';
import { ManageCYBComponent } from './manage-cyb/manage-cyb.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SocialHandlesComponent } from './social-handles/social-handles.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { AssignRoleComponent } from './assign-role/assign-role.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { HideCampaignComponent } from './hide-campaign/hide-campaign.component';
import { DeleteCampaignComponent } from './delete-campaign/delete-campaign.component';
import { AllWithdrawlRequestComponent } from './all-withdrawl-request/all-withdrawl-request.component';
import { RecievedRequestComponent } from './recieved-request/recieved-request.component';
import { RejectedRequestComponent } from './rejected-request/rejected-request.component';
import { ProcessedRequestComponent } from './processed-request/processed-request.component';
import { ApprovedRequestComponent } from './approved-request/approved-request.component';
import { HoldRequestComponent } from './hold-request/hold-request.component';
import { RouterModule, Routes } from '@angular/router';
import { LogOutComponent } from './log-out/log-out.component';
@NgModule({
  declarations: [
    AppComponent,
    ManageMovingTextComponent,
    ManageCampaignerComponent,
    AdminProfileComponent,
    ManageUserComponent,
    ManagePlanComponent,
    ManageImageComponent,
    ManageHospitalComponent,
    ManageCauseComponent,
    ManageUnclaimedDonationComponent,
    ManageAccountDetailComponent,
    ManageDonorComponent,
    ManageCYBComponent,
    ResetPasswordComponent,
    SocialHandlesComponent,
    CreateRoleComponent,
    AssignTaskComponent,
    AssignRoleComponent,
    EditCampaignComponent,
    ViewCampaignComponent,
    CreateCampaignComponent,
    HideCampaignComponent,
    DeleteCampaignComponent,
    AllWithdrawlRequestComponent,
    RecievedRequestComponent,
    RejectedRequestComponent,
    ProcessedRequestComponent,
    ApprovedRequestComponent,
    HoldRequestComponent,
    LogOutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
