import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BitCoinServiceService {

  constructor(private data: HttpClient ) { }

  getBitcoin() {
    return this.data.get(`https://data.nasdaq.com/api/v3/datasets/BITFINEX/LUNAF0USTF0.json?api_key=${environment.API_KEY}`);
  
  }
}



