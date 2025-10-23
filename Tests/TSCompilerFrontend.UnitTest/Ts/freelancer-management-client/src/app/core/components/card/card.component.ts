import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() hideGoBackBtn = false;
  private currentUrl: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  get showGoBack() {
    return this.currentUrl.includes('view') && !this.hideGoBackBtn
  }
  goBack() {
  }
}
