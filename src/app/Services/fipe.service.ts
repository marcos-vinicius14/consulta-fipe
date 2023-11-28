import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { FipeData } from "../Models/fipe.models";



@Injectable({
  providedIn: 'root'
})

export class FipeService {

  private baseURL: string = environment.fipeAPI;

  constructor(private httpClient: HttpClient) {

 }

  getFipe() {
    return this.httpClient.get<FipeData>(this.baseURL + '001324-2')
  }
}
