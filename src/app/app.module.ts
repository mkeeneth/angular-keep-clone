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
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { RemoveNoteDialog } from "./notes-container/remove-note/remove-note-dialog.component";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NotesContainerComponent } from "./notes-container/notes-container.component";
import { AddNoteComponent } from "./notes-container/add-note/add-note.component";
import { ViewNotesComponent } from "./notes-container/view-notes/view-notes.component";

// state
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/note.reducer";
import { RemoveNoteComponent } from "./notes-container/remove-note/remove-note.component";
import { EditNoteComponent } from "./notes-container/edit-note/edit-note.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotesContainerComponent,
    AddNoteComponent,
    ViewNotesComponent,
    RemoveNoteComponent,
    RemoveNoteDialog,
    EditNoteComponent
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
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot({ notes: reducer })
  ],
  entryComponents: [RemoveNoteDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
