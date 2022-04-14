import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../models/document.model";

const baseUrl = 'http//localhost:8080/api/documents'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Document[]>{
    return this.http.get<Document[]>(baseUrl);
  }

  get(id: any): Observable<Document>{
    return this.http.get(`${baseUrl}/${id}`)
  }
}
