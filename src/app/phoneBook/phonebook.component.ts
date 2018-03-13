import { Component } from "@angular/core";
import { RepositoryUser } from "../model/repository.model";

//The component using for displaying table of contacts

@Component({
	selector: "show-phonebook",
	templateUrl: "phonebook.component.html",
	styleUrls: ["phonebook.component.css", "./phonebook.component.media.vertical.css", "./phonebook.component.media.horizontal.css"]
})
export class ShowPhoneBook{
	
	//Injection RepositoryUser for getting data of phone book

	constructor(private dataSource: RepositoryUser){}

	//Gettig data of phone book

	getUsers(){
		return this.dataSource.getUsers();
	}
}