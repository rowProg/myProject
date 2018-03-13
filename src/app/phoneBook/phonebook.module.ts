import { NgModule } from "@angular/core";
import { ShowPhoneBook } from "./phonebook.component";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	imports: [BrowserModule],
	declarations: [ShowPhoneBook],
	exports: [ShowPhoneBook]
})
export class PhoneBookModule{}