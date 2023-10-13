import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomicilioModel } from '../../../Data/Model/Domicilio.Model';
import { ConsultaList } from '../../../Data/Model/Shared/ConsultaList';
import { DomicilioService } from '../../../Services/Domicilio.Service';
import { AlertasService } from '../../Shared/Alertas.service';
import { AccionesModal } from '../../../Data/enums/AccionesModal.enum';
import { ModalType } from '../../../Data/Model/Shared/ModalType';
import { DomicilioComponent } from '../../Modals/domicilio/domicilio.component';

@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.scss']
})
export class DomiciliosComponent implements OnInit {
  //#region Inicios

  busqueda: ConsultaList<DomicilioModel> = new ConsultaList<DomicilioModel>();

  constructor(
    private service: DomicilioService,
    private dialog: MatDialog,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    this.ConsultaService();
  }
  //#endregion

  //#region Eventos
  UpdateDomicilioEvent(d: DomicilioModel) {
    this.openDialog(d, AccionesModal.editar);
  }
  AgregarDomicilioEvent() {
    this.openDialog(new DomicilioModel, AccionesModal.crear);
  }
  DeleteDomicilioEvent(d: DomicilioModel) {
    this.ConfirmaEliminacion(d);
  }
  BuscarPorNombreEvent() {
    this.ConsultaService();
  }
  //#endregion

  //#region Metodos
  openDialog(d: DomicilioModel, accion: AccionesModal) {
    let env: ModalType<DomicilioModel> = new ModalType<DomicilioModel>();
    env.param = d;
    env.accion = accion;
    let dialogRef = this.dialog.open(DomicilioComponent, {
      panelClass: 'custom-modalbox',
      maxHeight: '80vh',
      maxWidth: '50vw',
      disableClose: true,
      data: env
    });
    dialogRef.afterClosed().subscribe(res => { this.ConsultaService(); });
  }
  async ConfirmaEliminacion(d: DomicilioModel) {
    let confirmacion: any;
    await this.alertas.confirmacionAlert("Alerta", "Seguro que desea eliminar este domicilio", "Eliminar", "cancelar", async function (res: any) { confirmacion = res; })
    if (await confirmacion.value) {
      this.DeleteDomicilioService(d);
    }
  }
  //#endregion

  //#region Servicios
  ConsultaService() {
    this.service.LeerDomiciolioList(this.busqueda).subscribe(res => {
      this.busqueda.list = res;
    });
  }
  DeleteDomicilioService(d: any) {
    this.service.BorrarDomicilio(d).subscribe(() => {
      this.alertas.success(undefined, "Se ha eliminado correctamente el registro");
      this.ConsultaService();
    });
  }
  //#endregion

}
