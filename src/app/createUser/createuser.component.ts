import { Component } from "@angular/core";
import { User } from "../model/model.user";
import { RepositoryUser } from "../model/repository.model";

/*
 *The component using for displaying form of creating contacts
 *Also has checking to errors of data
*/

@Component({
	selector: "create-user",
	templateUrl: "./createuser.component.html",
	styleUrls: ["./createuser.component.css", "./createuser.component.media.vertical.css", "./createuser.component.media.horizontal.css"]
})
export class CreateUser{
	user: User = new User(); //Contact for creating in contacts table
	p: string = "+375(xx)xxx-xx-xx"; //String for placeholder attribute
	state: string; //State for performing if statement in component template

	//Injecting repository of main data for editing contact user of contacts table

	constructor(private repository: RepositoryUser){}

	/*
	 *Calling when user press the submit button.
	 *Inside the method calling check method, which checking errors data.
	 *According the result displaying the success message or error.
	 *From component template providing variables of form and success & error blocks
	*/

	addUser(myForm, success, error){

		/*
		 *If checcking correct data are true, defined user property adding to contacts table,
		 *displaying block of success information and after 3s hiding.
		 *If false, displaying error block information and hiding after 3s.
		*/

		if(this.checkInput(myForm)){
			this.user.id = this.repository.getUsers().length + 1;
			this.repository.setUser(this.user);
			this.user = new User();

			this.state = "true";
			success.style.display = "block";
			setTimeout(() => success.style.display = "none", 3000);
			
			myForm.reset();
		}
		else{
			this.state = "false";
			error.style.display = "block";
			setTimeout(() => error.style.display = "none", 3000);
		}
	}

	//The method that is called to check data for errors

	checkInput(myForm){
		let elements = myForm.elements; //All elements of form

		for(let i = 0; i < elements.length - 1; i++){

			//Checking the telephone number by pattern

			if(i == 2){
				if(elements[i].value.search(/\+375[2|4][9|4][0-9]{7,7}/) !== -1){
					return true;
				}
				else{
					return false;
				}
			}
			else {

				//Checking, if the field for empty

				if(elements[i].value.length === 0)
					return false;

				//Checking the field for Cyrillic and numbers

				if(elements[i].value.search(/[0-9]{1,}/) !== -1){
					return false;
				}
				else if(elements[i].value.search(/[а-яА-Я]{1,}/) !== -1){
					return false;
				}
			}
		}
	}
}