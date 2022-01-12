import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = "http://localhost:8080/api/tutorials";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //get all the data 
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl);
  }

  //get the data using id
  getById(id: any): Observable<any>{
    return this.http.get<Product[]>(baseUrl + '/' + id)
  }

  //create 
  create(data: any): Observable<any>{
    return this.http.post<Product[]>(baseUrl, data)
  }

  //update using id
  update(id: any, data: any): Observable<any>{
    return this.http.put<Product[]>(baseUrl + '/', data)
  }

  //delete by id
  delete(id: any){
    return this.http.delete(baseUrl + '/' + id)
  }

  //delete all
  deleteAll(){
    return this.http.delete(baseUrl)
  }


}
