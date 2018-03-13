import { NgModule } from "@angular/core";
import { CreateUser } from "./createuser.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [CreateUser],
	exports: [CreateUser],
	imports: [FormsModule, BrowserModule]
})
export class CreateUserModule{}