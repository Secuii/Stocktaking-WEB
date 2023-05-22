import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipForm } from 'src/app/entities-form/membership-form';
import { Membership } from 'src/app/entities/membership';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { MembershipService } from 'src/app/services/membership.service';
import { MyRoutingService } from 'src/app/services/my.routing.service';

@Component
(
    {
        selector: 'app-update-membership-component',
        templateUrl: './update-membership-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ],
        providers:
          [
            MembershipService,
            MyRoutingService
          ]
    }
)
export class UpdateMembershipComponentComponent implements OnInit 
{

  /*
    Eventos
  */
  @Output() statusPageEvent = new EventEmitter <StatusPage>();


   /*
      Variables:
  */
    @Input() membership? : Membership = new Membership();
    //public membership: Membership;
    public membershipForm : MembershipForm;
    public workMembership : Membership;
   
      /*
          Constructor:
      */
      constructor
      (
          private activatedRoute: ActivatedRoute, 
          private membershipService: MembershipService,
          private myRoutingService : MyRoutingService,
          private router: Router,
      )
      {
            this.membershipForm = new MembershipForm();
            this.workMembership = new Membership();
      }

    /*
      Métodos implementados de interfaces:
    */
    ngOnInit(): void 
    {
        if(this.membership != undefined)
        {
          if(this.membership.id != -1)
          {
            //this.workType = this.type;
            this.workMembership.id = this.membership.id;
            this.workMembership.name = this.membership.name;
            this.workMembership.price = this.membership.price;
    
            this.membershipForm.id = this.membership.id;

            this.resetForm();
          }
          else
          {
          }
          
        }
        this.resetForm();
      }


  /*
    Métodos de Botones
  */
    public goBackBtn()
    {
      this.changeStatusPage(StatusPage.ReadAll);
    }
  
    public sendDatasBtn(formData : MembershipForm)
    {
  
    }


  /*
    Métodos de estados
  */
    private changeStatusPage (newStatusPage : StatusPage)
    {
      this.statusPageEvent.emit(newStatusPage);
    }


  /*
    Métodos de formulario
  */
    public submitSendDatas (membershipForm : MembershipForm)
    {
      // Si el ID de Membership = 0 (Por defecto) -> Crear
      if (this.workMembership.id == -1)
      {
        this.membershipService.createMembership(this.membershipForm).subscribe
        (
          response => 
          {
            alert("Type created");
          }
        )
      }
      else // Si el ID de Type != 0 (Existe) -> Udate
      {
        this.mapperMembership(); // Mapeamos el workMembership(Membership) al formulario(membershipForm)
        this.membershipService.updateMembership(this.workMembership).subscribe
        (
          response => 
          {
            alert("Membership modified");
          }
        )
      }
      this.changeStatusPage(StatusPage.ReadAll);
      this.myRoutingService.reloadCurrentRoute(this.router);
    }

    private mapperMembership () : void
    {
      this.workMembership.name = this.membershipForm.name;
      this.workMembership.description = this.membershipForm.description;
      this.workMembership.price = this.membershipForm.price;
    }
  
    public resetForm()
    {
      this.membershipForm.name = this.workMembership.name;
      this.membershipForm.description = this.workMembership.description;
      this.membershipForm.price = this.workMembership.price;
    }


    /*
        Método checkAll:
            Entradas: Ninguna.
            Objetivo: Realizar los checkeos de todos los campos del formulario
            Salidas: Ninguna
    */
    public checkAll(): void
    {
      
    }

    /*
        Método submitOfferUpdate
            Entradas: oferta a modificar 
            Objetivo: Enviar al servicio la oferta a actualizar y dar feedback del proceso
            Salidas: Ninguna
    */
   
    public submitMembershipUpdate(form: Membership) : void
    { 
      
    }

}
