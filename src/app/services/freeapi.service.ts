import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable()
export class freeApiService
{
    constructor(private httpClient: HttpClient){ }

    getProducts(): Observable<any>{
        return this.httpClient.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
    }

    getProductsinCart(): Observable<any>{
        return this.httpClient.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick");
    }


}
