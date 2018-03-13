import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { RepositoryUser } from "./repository.model";
import { HttpModule } from "@angular/http";

@NgModule({
	imports: [HttpModule],
	providers: [StaticDataSource, RepositoryUser]
})
export class ModelModule{}