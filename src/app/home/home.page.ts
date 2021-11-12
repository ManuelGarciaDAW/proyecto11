import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personas : any;
  filtro : string = '';

  constructor(private httpClient: HttpClient) {

    this.personas = this.httpClient.get('https://raw.githubusercontent.com/ManuelGarciaDAW/proyecto11/master/MOCK_DATA%20(1).json');
  }
}
