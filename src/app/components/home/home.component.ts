import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log(localStorage);
      console.log(localStorage.getItem('expires_at'));
      console.log(localStorage.getItem('id_token'));
      console.log(localStorage.getItem('access_token'));
  }

  
}
