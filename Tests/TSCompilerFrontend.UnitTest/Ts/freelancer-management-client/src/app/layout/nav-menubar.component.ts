import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { navMenuService } from './service/nav-menu.service';

@Component({
  selector: 'app-nav-menubar',
  template: `
 <p-menubar [model]="menu"></p-menubar>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class NavMenubarComponent implements OnInit, OnDestroy {
  menu: any[] = []
  
  navMenuSubscription;
  constructor(private menuService: navMenuService,private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.navMenuSubscription = this.menuService.navMenu$.subscribe(menu => {
      this.menu = menu;
      this.cdr.markForCheck();
    })
  }

  ngOnDestroy(): void {
    if (this.navMenuSubscription)
      this.navMenuSubscription.unsubscribe()
  }
}
