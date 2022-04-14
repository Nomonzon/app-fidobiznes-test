import {RouterModule, Routes} from "@angular/router";
import {DocumentListComponent} from "./components/document-list/document-list.component";
import {DocumentDetailsComponent} from "./components/document-details/document-details.component";
import {AddDocumentComponent} from "./components/add-document/add-document.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'documents', pathMatch: 'full'},
  {path: 'documents', component: DocumentListComponent},
  {path: 'documents/:id', component: DocumentDetailsComponent},
  {path: 'add', component: AddDocumentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
