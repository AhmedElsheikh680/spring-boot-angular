import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLogin: boolean = false;
  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.isUserLogin = this.hardcodedAuthenticationService.isUserLoginIn();
  }

}
