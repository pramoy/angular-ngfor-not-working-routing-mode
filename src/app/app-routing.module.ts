import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";

const routes: Routes = [
  { path: "", component: HelloComponent },
  {
    path: "core",
    loadChildren: () =>
      import("./core/core-routing.module").then(d => d.CoreRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
