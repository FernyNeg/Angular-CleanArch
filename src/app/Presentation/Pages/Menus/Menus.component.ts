import { Component, OnInit } from '@angular/core';
import { IMenuService } from 'src/app/Core/Interfaces/services/Admin/IMenu.Service';
import { MenuModel } from 'src/app/Data/Model/Admin/Menu.Model';
import { ConsultaList } from 'src/app/Data/Model/Shared/ConsultaList';
import { AlertasService } from '../../Shared/Alertas.service';
import { MatDialog } from '@angular/material/dialog';
import { AccionesModal } from 'src/app/Data/enums/AccionesModal.enum';
import { ModalType } from 'src/app/Data/Model/Shared/ModalType';

@Component({
  selector: 'app-Menus',
  templateUrl: './Menus.component.html',
  styleUrls: ['./Menus.component.scss']
})
export class MenusComponent implements OnInit {
  //#region Inicios

  busqueda: ConsultaList<MenuModel> = new ConsultaList<MenuModel>();

  constructor(
    private service: IMenuService,
    private dialog: MatDialog,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    this.ConsultaService();
  }
  //#endregion

  //#region Eventos
  UpdateMenuEvent(c: MenuModel) {
    this.openDialog(c, AccionesModal.editar);
  }
  AgregarMenuEvent() {
    this.openDialog(new MenuModel(), AccionesModal.crear);
  }
  DeleteMenuEvent(c: MenuModel) {
    this.ConfirmaEliminacion(c);
  }
  BuscarPorNombreEvent() {
    this.ConsultaService();
  }
  //#endregion

  //#region Metodos
  openDialog(c: MenuModel, accion: AccionesModal) {
    let env: ModalType<MenuModel> = new ModalType<MenuModel>();
    env.param = c;
    env.accion = accion;
    // let dialogRef = this.dialog.open(MenuComponent, {
    //   panelClass: 'custom-modalbox',
    //   maxHeight: '80vh',
    //   maxWidth: '50vw',
    //   disableClose: true,
    //   data: env
    // });
    // dialogRef.afterClosed().subscribe((res: any) => { this.ConsultaService(); });
  }
  async ConfirmaEliminacion(c: MenuModel) {
    let confirmacion: any;
    await this.alerta.confirmacionAlert("Alerta", "¿Seguro que desea eliminar este registro?", "Eliminar", "Cancelar",
      async function (res: any) { confirmacion = res; });
    if (await confirmacion.value) {
      this.DeleteMenuService(c)
    }
  }
  //#endregion

  //#region Servicios
  ConsultaService() {
    this.service.getMenus(this.busqueda).subscribe(res => {
      this.busqueda.list = res;
    });
  }
  DeleteMenuService(c: MenuModel) {
    this.service.deleteMenuById(c).subscribe(() => {
      this.alerta.success(undefined, "Se ha eliminado correctamente el registro");
      this.ConsultaService();
    });
  }
  //#endregion
}
