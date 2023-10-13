import { Observable } from "rxjs"
import { MenuModel } from "src/app/Data/Model/Admin/Menu.Model";
import { ConsultaList } from "src/app/Data/Model/Shared/ConsultaList";

export abstract class IMenuRepository {
  abstract getMenus(param: ConsultaList<MenuModel>): Observable<MenuModel[]>;
  abstract getMenuById(param: MenuModel): Observable<MenuModel>;
  abstract addMenu(param: MenuModel): Observable<MenuModel>;
  abstract deleteMenuById(param: MenuModel): Observable<MenuModel>;
  abstract updateMenuById(param: MenuModel): Observable<MenuModel>;
}