import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";

const routes: Routes = [
  { path: "", component: HelloComponent },
  {
    path: "core",
    loadChildren: () =>
      import("./core/core.module").then(d => d.CoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
