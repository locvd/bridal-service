import { Component, OnInit } from "@angular/core";
import template from "./wd-home.component.html";

@Component({
    selector: "wd-home",
    template
})
export class WeddingHomeComponent implements OnInit {
  name: string;
  constructor() {
  } 
  ngOnInit() {
      this.name = "Wedding Home";
  }
}