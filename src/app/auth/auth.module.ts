import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        ReactiveFormsModule
    ],
    exports: [
        AuthComponent
    ]
})

export class AuthModule {}
