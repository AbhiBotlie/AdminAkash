import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AllWithdrawlRequestComponent } from './all-withdrawl-request/all-withdrawl-request.component';
import { ApprovedRequestComponent } from './approved-request/approved-request.component';
import { AssignRoleComponent } from './assign-role/assign-role.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { DeleteCampaignComponent } from './delete-campaign/delete-campaign.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';
import { HideCampaignComponent } from './hide-campaign/hide-campaign.component';
import { HoldRequestComponent } from './hold-request/hold-request.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ManageAccountDetailComponent } from './manage-account-detail/manage-account-detail.component';
import { ManageCampaignerComponent } from './manage-campaigner/manage-campaigner.component';
import { ManageCauseComponent } from './manage-cause/manage-cause.component';
import { ManageCYBComponent } from './manage-cyb/manage-cyb.component';
import { ManageDonorComponent } from './manage-donor/manage-donor.component';
import { ManageHospitalComponent } from './manage-hospital/manage-hospital.component';
import { ManageImageComponent } from './manage-image/manage-image.component';
import { ManageMovingTextComponent } from './manage-moving-text/manage-moving-text.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { ManageUnclaimedDonationComponent } from './manage-unclaimed-donation/manage-unclaimed-donation.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ProcessedRequestComponent } from './processed-request/processed-request.component';
import { RecievedRequestComponent } from './recieved-request/recieved-request.component';
import { RejectedRequestComponent } from './rejected-request/rejected-request.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SocialHandlesComponent } from './social-handles/social-handles.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';

const routes: Routes = [
  {path:'managemovingtext', component: ManageMovingTextComponent},
  {path:'managecampaigner', component: ManageCampaignerComponent},
  {path:'adminprofile', component: AdminProfileComponent},
  {path:'manageuser', component: ManageUserComponent},
  {path:'manageplans', component: ManagePlanComponent},
  {path:'manageimages', component: ManageImageComponent},
  {path:'managehospitals', component: ManageHospitalComponent},
  {path:'managecause', component: ManageCauseComponent},
  {path:'manageclaimeddonations', component:ManageUnclaimedDonationComponent},
  {path:'manageaccountdetails', component: ManageAccountDetailComponent},
  {path:'managedonor', component: ManageDonorComponent },
  {path:'managecyb', component: ManageCYBComponent},
  {path:'resetpassword', component: ResetPasswordComponent},
  {path:'socialhandles', component: SocialHandlesComponent},
  {path:'createrole', component: CreateRoleComponent},
  {path:'assigntask', component: AssignTaskComponent},
  {path:'assignrole', component: AssignRoleComponent},
  {path:'createcampaign', component: CreateCampaignComponent},
  {path:'editcampaign', component: EditCampaignComponent},
  {path:'createcampaign', component: CreateCampaignComponent},
  {path:'viewcampaign', component: ViewCampaignComponent},
  {path:'deletecampaign', component: DeleteCampaignComponent},
  {path:'hidecampaign', component: HideCampaignComponent},
  {path:'recievedrequest', component: RecievedRequestComponent},
  {path:'rejectedrequest', component: RejectedRequestComponent},
  {path:'allrequest', component: AllWithdrawlRequestComponent},
  {path:'processedrequest', component: ProcessedRequestComponent},
  {path:'approvedrequest', component: ApprovedRequestComponent},
  {path:'holdrequest', component: HoldRequestComponent},
  {path:'logout', component: LogOutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
