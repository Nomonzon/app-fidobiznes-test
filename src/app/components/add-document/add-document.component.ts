import { Component, OnInit } from '@angular/core';
import {Document} from "../../models/document.model";


@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  document: Document = {
    numberOfDoc:'',
    date: new Date(),
    corespondentId: -1,
    deliveryFormId: -1,
    theme: '',
    description: '',
    deadLine: new Date(),
    access: false,
    control: false
  }

  submitted = false

  constructor() { }

  ngOnInit(): void {
  }

}
