import { User } from './../../../entities/user';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component({
  selector: 'app-card-user-component',
  templateUrl: './card-user-component.component.html',
  styleUrls: ['./../../components.css']
})
export class CardUserComponentComponent {

  /*
       Eventos:
   */
  @Output() statusPageEvent = new EventEmitter<StatusPage>();

  /*
      Variales:
  */
  @Input() user?: User = new User();
  public idUser: number;

  /*
  Constructor
  */
  constructor
    (
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {
    this.user = new User();
    this.idUser = 0;
  }


  /*
      Métodos implementados de interfaces:
  */
  ngOnInit(): void 
  {
  }

  ngOnDestroy(): void 
  {
  }

  /*
      Métodos de Estados
  */
  public goBackBtn() 
  {
    this.changeStatusPage(StatusPage.ReadAll);
  }

  private changeStatusPage(newStatusPage: StatusPage) 
  {
    this.statusPageEvent.emit(newStatusPage);
  }

}
