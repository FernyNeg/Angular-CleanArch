import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPersonRepository } from 'src/app/Core/Interfaces/repositories/Person/IPerson.Repsitory';
import { PersonModel } from '../../Model/Person/Person.Model';
import { ConsultaList } from '../../Model/Shared/ConsultaList';
import { UrlConstantes } from 'src/app/Core/Shared/Constants/UrlConstantes';
import { PersonMapper } from '../../Mappers/Person/Person.Model';

@Injectable({
  providedIn: 'root'
})

export class PersonRepository implements IPersonRepository {
  private mapper = new PersonMapper();

  constructor(private conexion: HttpClient) { }
  getPersons(param: ConsultaList<PersonModel>): Observable<PersonModel[]> {
    return this.conexion.post<PersonModel[]>(UrlConstantes.getPersons, param)
      .pipe(map(this.mapper.mapFromList));
  }
  getPersonById(param: PersonModel): Observable<PersonModel> {
    return this.conexion.post<PersonModel>(UrlConstantes.getPersonById, param)
      .pipe(map(this.mapper.mapFrom));
  }
  addPerson(param: PersonModel): Observable<PersonModel> {
    return this.conexion.post<PersonModel>(UrlConstantes.addPerson, param);
  }
  deletePersonById(param: PersonModel): Observable<PersonModel> {
    return this.conexion.post<PersonModel>(UrlConstantes.deletePersonById, param);
  }
  updatePersonById(param: PersonModel): Observable<PersonModel> {
    return this.conexion.post<PersonModel>(UrlConstantes.updatePersonById, param);
  }

}