import { Component, OnInit } from '@angular/core';
import { SideBarGetSetService } from 'src/app/core/service/side-bar-get-set.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuIcon = true;
  constructor(private SideBarService: SideBarGetSetService) { }

  ngOnInit(): void {

  }
  toggleSideBar(){
    this.menuIcon = !this.menuIcon;
    this.SideBarService.sideNavMenu = this.menuIcon;
  }
}
