import { Component } from "@angular/core";

@Component({
  selector: "app-core",
  templateUrl: "./core.component.html",
  styleUrls: ["./core.component.sass"]
})
// implements OnInit
export class CoreComponent {
  constructor() {}
  test = "gggg";
  testArray = ["a", "b", "c"];
  // ngOnInit(): void {
  // }
}
