import { Permission } from './../../../entities/permission';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-permission-component',
  templateUrl: './card-permission-component.component.html',
  styleUrls: ['./../../components.css']
})
export class CardPermissionComponentComponent implements OnInit{ 

  /*
     Variales:
 */
     public permissions: Permission;
     public idPermissions: number;
 /*
     Constructor
 */
 constructor(private router: Router,
             private activatedRoute: ActivatedRoute)
 {
     this.permissions= new Permission();
     this.idPermissions = 0;
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
             this.idPermissions = params['id'];
         }
     );

     this.getPermissionsFromIdService();
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
   private getPermissionsFromIdService(): void
   {
       /*this.membershipService.readAPermissions(this.idPermissions).subscribe(
           response => 
           {
               this.permissions = response;
           }
       )*/
   }

}

