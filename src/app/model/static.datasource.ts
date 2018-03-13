import { Injectable } from "@angular/core";
import { User } from "./model.user";

/*
 *The class of static data which contain data of main data type User
 *and providing them to other parts of programm.
*/

@Injectable()
export class StaticDataSource{
	private users: User[] = []; //Keeping of main data

	//Getting the main data users
	
	getUsers(): User[]{
		return this.users;
	}
}