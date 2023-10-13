import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; import { Observable } from "rxjs";
import { IPersonRepository } from 'src/app/Core/Interfaces/repositories/Person/IPerson.Repsitory';
import { IPersonService } from 'src/app/Core/Interfaces/services/Person/IPerson.Service';
import { PersonModel } from 'src/app/Data/Model/Person/Person.Model';
import { ConsultaList } from 'src/app/Data/Model/Shared/ConsultaList';

@Injectable({
  providedIn: 'root'
})

export class PersonService implements IPersonService {

  constructor(private conexion: IPersonRepository) { }

  getPersons(param: ConsultaList<PersonModel>): Observable<PersonModel[]> {
    return this.conexion.getPersons(param);
  }
  getPersonById(param: PersonModel): Observable<PersonModel> {
    return this.conexion.getPersonById(param);
  }
  addPerson(param: PersonModel): Observable<PersonModel> {
    return this.conexion.addPerson(param);
  }
  deletePersonById(param: PersonModel): Observable<PersonModel> {
    return this.conexion.deletePersonById(param);
  }
  updatePersonById(param: PersonModel): Observable<PersonModel> {
    return this.conexion.updatePersonById(param);
  }

}