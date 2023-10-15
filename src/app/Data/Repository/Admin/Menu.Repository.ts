import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { IMenuRepository } from 'src/app/Core/Interfaces/repositories/Admin/IMenu.Repository';
import { ConsultaList } from '../../Model/Shared/ConsultaList';
import { MenuModel } from '../../Model/Admin/Menu.Model';
import { UrlConstantes } from 'src/app/Core/Shared/Constants/UrlConstantes';

@Injectable({
  providedIn: 'root'
})
export class MenuRepository implements IMenuRepository {
  constructor(private Conexion: HttpClient) { }

  getMenus(param: ConsultaList<MenuModel>): Observable<MenuModel[]> {
    return this.Conexion
      .post<MenuModel[]>(UrlConstantes.getMenus, param);
  }
  getMenuById(param: MenuModel): Observable<MenuModel> {
    return this.Conexion
      .post<MenuModel>(UrlConstantes.getMenuById, param);
  }
  addMenu(param: MenuModel): Observable<MenuModel> {
    return this.Conexion
      .post<MenuModel>(UrlConstantes.addMenu, param);
  }
  deleteMenuById(param: MenuModel): Observable<MenuModel> {
    return this.Conexion
      .post<MenuModel>(UrlConstantes.deleteMenuById, param);
  }
  updateMenuById(param: MenuModel): Observable<MenuModel> {
    return this.Conexion
      .post<MenuModel>(UrlConstantes.updateMenuById, param);
  }


}