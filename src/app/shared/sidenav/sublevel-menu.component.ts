import { Component, Input } from '@angular/core';
import { INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0"
      class="sublevel-nav"
    >
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a href="" class="sublevel-nav-link"></a>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class SublevelMenuComponent {

  @Input() data!: INavbarData;
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

}
