import { NgModule } from "@angular/core";
import { DeleteUser } from "./deleteuser.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [FormsModule, BrowserModule],
	declarations: [DeleteUser],
	exports: [DeleteUser]
})
export class DeleteUserModule{}