import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductCardComponent} from "../product-card/product-card.component";
import {IProduct} from "./ product-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client: HttpClient) {

  }

  getProducts(): Promise<IProduct[]> {
 return new Promise<IProduct[]>(resolve => {
   this.client.get<IProduct[]>('https://fakestoreapi.com/products').subscribe({
     next: (response) => {
       resolve(response);
     },
     error: (error) => {
       console.error(error);
       resolve([]);
     }
   });
 });
}



}
