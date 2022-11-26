import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form-page",
  templateUrl: "./form-page.component.html",
  styleUrls: ["./form-page.component.css"],
})

export class FormPageComponent implements OnInit {
  email: string = "test@test.com";
  subscription: string = "Advanced";
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
