import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { NotesApiService } from "./notes-api.service";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NotesContainerComponent } from "./notes-container/notes-container.component";
import { AddNoteComponent } from "./notes-container/add-note/add-note.component";
import { ViewNotesComponent } from "./notes-container/view-notes/view-notes.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotesContainerComponent,
    AddNoteComponent,
    ViewNotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    AngularFontAwesomeModule
  ],
  providers: [NotesApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
