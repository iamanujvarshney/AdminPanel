import { Component, OnInit } from '@angular/core';
import { SideBarGetSetService } from 'src/app/core/service/side-bar-get-set.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isOpen = true;

  constructor(private SideBarService: SideBarGetSetService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    if(!this.SideBarService.sideMenu){
      this.isOpen = false;
    }
    else{
      this.isOpen = true;
    }
  }
}
