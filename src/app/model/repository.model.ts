import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { User } from "./model.user";

//Class for performing main tasks

@Injectable()
export class RepositoryUser{
	private dataSource: User[] = []; //The main data list

	//Injecting  the main data from staticData and writing to dataSource

	constructor(private staticData: StaticDataSource){
		this.staticData.getUsers().forEach(item => this.dataSource.push(item));
	}

	//Getting the full list of main data dataSource

	getUsers(): User[]{
		return this.dataSource;
	}

	//Adding the new data to main data list dataSource

	setUser(user){
		this.dataSource.push(user);
	}

	//Editing a data from main data list dataSource

	editUser(user){
		this.dataSource[user.id - 1] = user;
	}

	//Deleting a data from main data list dataSource 
	
	deleteUser(id){
		this.dataSource.splice(id - 1, 1);

		for(let i = id - 1; i < this.dataSource.length; i++)
			this.dataSource[i].id--;
	}
}