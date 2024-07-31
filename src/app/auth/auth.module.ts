import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [AuthComponent, LoadingSpinnerComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [AuthComponent],
  providers: [AuthService],
})
export class AuthModule {}
