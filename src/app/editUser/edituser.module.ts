import { NgModule } from "@angular/core";
import { EditUser } from "./edituser.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	imports: [FormsModule, BrowserModule],
	declarations: [EditUser],
	exports: [EditUser]
})
export class EditUserModule{}