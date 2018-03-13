import { Component } from "@angular/core";
import { RepositoryUser } from "../model/repository.model";
import { User } from "../model/model.user";

/*
 *The component using for displaying form of editing contacts
 *Also has checking to errors of data
*/

@Component({
	selector: "edit-user",
	templateUrl: "./edituser.component.html",
	styleUrls: ["./edituser.component.css", "./edituser.component.media.vertical.css", "./edituser.component.media.horizontal.css"]
})
export class EditUser{
	user: User = new User(); //A contact for replacing in table of contacts
	id: string; //Id property of contact user
	p: string = "+375(xx)xxx-xx-xx"; // String for placeholder attribute
	state: string; //State for performing if statement in component template

	//Injecting repository of main data for editing contact user of contacts table

	constructor(private repository: RepositoryUser){}

	/*
	 *Calling when user press the submit button.
	 *Inside the method calling check method, which checking errors data.
	 *According the result displaying the success message or error.
	 *From component template providing variables of form and success & error blocks
	*/

	editUser(myForm, success, error){
		if(this.checkEdit(myForm)){
			this.user.id = parseInt(this.id);
			this.repository.editUser(this.user);
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

	checkEdit(myForm){
		let dataSource = this.repository.getUsers(); //The main data
		let elements = myForm.elements; //All elements of form

		//Checking, if the contacts list for empty

		if(dataSource.length === 0)
			return false;

		//Checking id field for not number value

		if(this.id.search(/[a-zA-Z|а-яА-Я]{1,}/) === -1)
			if(!(dataSource.find(item => item.id === parseInt(this.id))))
				return false;
			else{}
		else
			return false;

		for(let i = 1; i < elements.length - 1; i++){

			//Checking the telephone number by pattern

			if(i === elements.length - 2){
				if(elements[i].value.search(/\+375[2|4][9|4][0-9]{7,7}/) === -1)
					return false;
				else{}
			}
			else{
			
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

		return true;
	}
}