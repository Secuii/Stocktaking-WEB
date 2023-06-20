import { Component } from '@angular/core';
import { Membership } from 'src/app/entities/membership';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
(
  {
    selector: 'app-membership-page',
    templateUrl: './membership-page.component.html',
    styleUrls: 
    [
      '../pages.css'
    ]
  }
)
export class MembershipPageComponent {

  /*
    Variables
  */
    public pageTitle : string;
    public statusPage : StatusPage;
    public membershipSelected? : Membership;

  /*
    Constructor
  */
    constructor()
    {
      this.pageTitle = "Página de Membership";
      this.statusPage = StatusPage.ReadAll;
      this.membershipSelected = undefined;
    }


  /*
    Métodos propios
  */
    public changeStatusPage(newStatusPage : StatusPage) : void
    {
      this.statusPage = newStatusPage;
    }
  
    public selectMembership(newMembershipSelected : Membership)
    {
      this.membershipSelected = newMembershipSelected;
    }

}
