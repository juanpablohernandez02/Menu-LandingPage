import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.css']
})
export class SideBarMenuComponent {
  isCollapsed: boolean = false;
  activeSubMenu: string = ''; 

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  toggleSubMenu(subMenu: string) {
    if (this.activeSubMenu === subMenu) {
      this.activeSubMenu = '';
    } else {
      this.activeSubMenu = subMenu;
    }
  }
}
