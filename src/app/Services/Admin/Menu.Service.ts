import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenuRepository } from 'src/app/Core/Interfaces/repositories/Admin/IMenu.Repository';
import { IMenuService } from 'src/app/Core/Interfaces/services/Admin/IMenu.Service';
import { MenuModel } from 'src/app/Data/Model/Admin/Menu.Model';
import { ConsultaList } from 'src/app/Data/Model/Shared/ConsultaList';

@Injectable({ providedIn: 'root' })
export class MenuService implements IMenuService {

  constructor(private repo: IMenuRepository) { }
  getMenus(param: ConsultaList<MenuModel>): Observable<MenuModel[]> {
    return this.repo.getMenus(param);
  }
  getMenuById(param: MenuModel): Observable<MenuModel> {
    return this.repo.getMenuById(param);
  }
  addMenu(param: MenuModel): Observable<MenuModel> {
    return this.repo.addMenu(param);
  }
  deleteMenuById(param: MenuModel): Observable<MenuModel> {
    return this.repo.deleteMenuById(param);
  }
  updateMenuById(param: MenuModel): Observable<MenuModel> {
    return this.repo.updateMenuById(param);
  }

}