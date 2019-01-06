import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NotesContainerComponent } from "./notes-container/notes-container.component";
import { AddNoteComponent } from "./notes-container/add-note/add-note.component";
import { ViewNotesComponent } from "./notes-container/view-notes/view-notes.component";

// state
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/note.reducer";

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
    MatButtonModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot({ notes: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
