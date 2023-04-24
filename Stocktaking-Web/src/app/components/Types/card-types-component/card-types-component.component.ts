import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Type } from 'src/app/entities/type';


@Component({
  selector: 'app-card-types-component',
  templateUrl: './card-types-component.component.html',
  styleUrls: ['./../../components.css']
})
export class CardTypesComponentComponent implements OnInit{


   /*
     Variales:
 */
     public type :Type;
     public idTypes: number;
 /*
     Constructor
 */
 constructor(private router: Router,
             private activatedRoute: ActivatedRoute)
 {
     this.type= new Type();
     this.idTypes = 0;
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
             this.idTypes = params['id'];
         }
     );

     this.getTypesFromIdService();
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
   private getTypesFromIdService(): void
   {
       /*this.membershipService.readAMembership(this.idMembership).subscribe(
           response => 
           {
               this.membership = response;
           }
       )*/
   }




}
