import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarGetSetService {
  public navSideMenu = true;
  constructor() { }
  
  public set sideNavMenu(value: boolean) {
    this.navSideMenu = value;
  }
  public get sideMenu() {
    return this.navSideMenu;
  }
}
