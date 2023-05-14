import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Attribute } from 'src/app/entities/attribute';
import { StatusPage } from 'src/app/enums/enum-status-page';


@Component
  (
    {
      selector: 'app-card-attributes-component',
      templateUrl: './card-attributes-component.component.html',
      styleUrls:
        [
          './../../components.css'
        ]
    }
  )

export class CardAttributesComponentComponent implements OnInit, OnDestroy {
  /*
      Eventos:
  */
  @Output() statusPageEvent = new EventEmitter<StatusPage>();

  /*
      Variales:
  */
  @Input() attributes?: Attribute = new Attribute();
  public idAttributes: number;

  /*
  Constructor
  */
  constructor
    (
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {
    this.attributes = new Attribute();
    this.idAttributes = 0;
  }


  /*
      Métodos implementados de interfaces:
  */
  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  /*
      Métodos de Estados
  */
  public goBackBtn() {
    this.changeStatusPage(StatusPage.ReadAll);
  }

  private changeStatusPage(newStatusPage: StatusPage) {
    this.statusPageEvent.emit(newStatusPage);
  }
}
