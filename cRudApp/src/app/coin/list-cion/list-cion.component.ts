import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Coin } from '../Coin';
@Component({
  selector: 'app-list-cion',
  templateUrl: './list-cion.component.html',
  styleUrls: ['./list-cion.component.css']
})
export class ListCionComponent implements OnInit {

  coins: any;
  constructor(private http: HttpClient, private service: CoinService) { }

  ngOnInit() {
    this.getCoins();
  }

getCoins(){
  this.service.getCoins().subscribe(res =>{
    this.coins = res;
    console.log(this.coins);
  })
}

deleteCoin(id) {
  this.service.deleteCoin(id).subscribe(res => {
    console.log('Deleted');
  });
}

}
