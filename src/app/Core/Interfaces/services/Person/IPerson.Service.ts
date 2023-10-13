import { Observable } from "rxjs"
import { PersonModel } from "src/app/Data/Model/Person/Person.Model";
import { ConsultaList } from "src/app/Data/Model/Shared/ConsultaList";
export abstract class IPersonService {
  abstract getPersons(param: ConsultaList<PersonModel>): Observable<PersonModel[]>;
  abstract getPersonById(param: PersonModel): Observable<PersonModel>;
  abstract addPerson(param: PersonModel): Observable<PersonModel>;
  abstract deletePersonById(param: PersonModel): Observable<PersonModel>;
  abstract updatePersonById(param: PersonModel): Observable<PersonModel>;
}