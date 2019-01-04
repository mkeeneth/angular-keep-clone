import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.css"]
})
export class AddNoteComponent implements OnInit {
  show: boolean = false;

  noteForm = this.fb.group({
    title: ["", Validators.required],
    body: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form values
    console.warn(this.noteForm.value);
  }
}
