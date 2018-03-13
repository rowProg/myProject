import { Component } from "@angular/core";
import { RepositoryUser } from "../model/repository.model";

/*
 *The component using for displaying form of deleting contacts
 *Also has checking to errors of data
*/

@Component({
	selector: "delete-user",
	templateUrl: "./deleteuser.component.html",
	styleUrls: ["./deleteuser.component.css", "./deleteuser.component.media.vertical.css", "./deleteuser.component.media.horizontal.css"]
})
export class DeleteUser{
	id: string; //Id property for deleting
	state: string; //State for performing if statement in component template

	//Injecting repository of main data for editing contact user of contacts table

	constructor(private repository: RepositoryUser){}

	/*
	 *Calling when user press the submit button.
	 *Inside the method calling check method, which checking errors data.
	 *According the result displaying the success message or error.
	 *From component template providing variables of form and success & error blocks
	*/

	deleteUser(myForm, success, error){

		if(this.checkDelete(myForm)){
			this.repository.deleteUser(parseInt(this.id));

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

	checkDelete(myForm){
		let dataSource = this.repository.getUsers(); //The main data
		let field = myForm.elements[0]; //The id field of form from deleting

		//Checking, if the contacts list for empty

		if(dataSource.length === 0)
			return false;

		//Checking id field for not number value

		if(this.id.search(/[a-zA-Z|а-яА-Я]{1,}/) === -1){
			if(dataSource.find(item => item.id === parseInt(this.id)))
				return true;
			else
				return false;
		}
		else{
			return false;
		}
	}
}