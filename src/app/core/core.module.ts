import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
import { CoreComponent } from "./core.component";

// import { CoreRoutingModule } from "./core-routing.module";
// import { CoreComponent } from "./core.component";

@NgModule({
  imports: [CommonModule, CoreRoutingModule],
  declarations: [CoreComponent]
})
export class CoreModule {}
