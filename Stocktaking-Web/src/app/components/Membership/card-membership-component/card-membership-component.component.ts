import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Membership } from 'src/app/entities/membership';

@Component({
  selector: 'app-card-membership-component',
  templateUrl: './card-membership-component.component.html',
  styleUrls: ['./../../components.css']
})
export class CardMembershipComponentComponent implements OnInit{ 

  /*
     Variales:
 */
     public membership: Membership;
     public idMembership: number;
 /*
     Constructor
 */
 constructor(private router: Router,
             private activatedRoute: ActivatedRoute)
 {
     this.membership= new Membership();
     this.idMembership = 0;
 }

 
 /*
     Métodos implementados de interfaces:
 */
 ngOnInit(): void 
 {
     this.activatedRoute.params.subscribe
     (
         params => 
         {
             this.idMembership = params['id'];
         }
     );

     this.getMembershipFromIdService();
 }

/*
   Métodos de enrutamiento
*/

   public mainPageBtn() {
     this.router.navigateByUrl('/main');
   }
 
   public showUsersBtn() {
     // Ir a la página de detalle del id
    // this.router.navigate(['users', id]);
   }



 /*
     Método getMembershipFromIdService:
         Entradas: Ninguna (El id lo pilla del this.membership)
         Objetivo: petición al servicio de supplier a construir por id.
         Salidas: Booleana. (true: Si se ha conseguido | false: Si no se ha conseguido)
 */
   private getMembershipFromIdService(): void
   {
       /*this.membershipService.readAMembership(this.idMembership).subscribe(
           response => 
           {
               this.membership = response;
           }
       )*/
   }

}

