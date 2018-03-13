import { Routes, RouterModule } from "@angular/router";
import { ShowPhoneBook } from "./phoneBook/phonebook.component";
import { CreateUser } from "./createUser/createuser.component";
import { EditUser } from "./editUser/edituser.component";
import { DeleteUser } from "./deleteUser/deleteuser.component";

//Creating routes for transition between other parts of programm

const routes: Routes = [
	{path: "table/phoneBook", component: ShowPhoneBook},
	{path: "table/createUser", component: CreateUser},
	{path: "table/editUser", component: EditUser},
	{path: "table/deleteUser", component: DeleteUser}
];

export const router = RouterModule.forRoot(routes);