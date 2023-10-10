import { Component, OnInit } from '@angular/core';
import { ICiudadanoService } from 'src/app/Core/Interfaces/services/ICiudadano.Service';
import { CiudadanoModel } from 'src/app/Data/Model/Ciudadano.Model';
import { ConsultaList } from 'src/app/Data/Model/Shared/ConsultaList';
import { AlertasService } from '../../Shared/Alertas.service';
import { AccionesModal } from 'src/app/Data/enums/AccionesModal.enum';
import { ModalType } from 'src/app/Data/Model/Shared/ModalType';

@Component({
  selector: 'app-ciudadanos',
  templateUrl: './ciudadanos.component.html',
  styleUrls: ['./ciudadanos.component.scss']
})
export class CiudadanosComponent implements OnInit {
  //#region Inicios

  busqueda: ConsultaList<CiudadanoModel> = new ConsultaList<CiudadanoModel>();

  constructor(
    private service: ICiudadanoService,
    // private dialog: MatDialog,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    this.ConsultaService();
  }
  //#endregion

  //#region Eventos
  UpdateCiudadanoEvent(c: CiudadanoModel) {
    this.openDialog(c, AccionesModal.editar);
  }
  AgregarCiudadanoEvent() {
    this.openDialog(new CiudadanoModel(), AccionesModal.crear);
  }
  DeleteCiudadanoEvent(c: CiudadanoModel) {
    this.ConfirmaEliminacion(c);
  }
  BuscarPorNombreEvent() {
    this.ConsultaService();
  }
  //#endregion

  //#region Metodos
  openDialog(c: CiudadanoModel, accion: AccionesModal) {
    let env: ModalType<CiudadanoModel> = new ModalType<CiudadanoModel>();
    env.param = c;
    env.accion = accion;
    // let dialogRef = this.dialog.open(CiudadanoComponent, {
    //   panelClass: 'custom-modalbox',
    //   maxHeight: '80vh',
    //   maxWidth: '50vw',
    //   disableClose: true,
    //   data: env
    // });
    // dialogRef.afterClosed().subscribe((res: any) => { this.ConsultaService(); });
  }
  async ConfirmaEliminacion(c: CiudadanoModel) {
    let confirmacion: any;
    await this.alerta.confirmacionAlert("Alerta", "¿Seguro que desea eliminar este registro?", "Eliminar", "Cancelar",
      async function (res: any) { confirmacion = res; });
    if (await confirmacion.value) {
      this.DeleteCiudadanoService(c)
    }
  }
  //#endregion

  //#region Servicios
  ConsultaService() {
    this.service.LeerCiudadanosList(this.busqueda).subscribe(res => {
      this.busqueda.list = res;
    });
  }
  DeleteCiudadanoService(c: CiudadanoModel) {
    this.service.BorrarCiudadano(c).subscribe(() => {
      this.alerta.success(undefined, "Se ha eliminado correctamente el registro");
      this.ConsultaService();
    });
  }
  //#endregion

}
