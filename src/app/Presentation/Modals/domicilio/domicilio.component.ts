import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomicilioModel } from '../../../Data/Model/Domicilio.Model';
import { ModalType } from '../../../Data/Model/Shared/ModalType';
import { DomicilioService } from '../../../Services/Domicilio.Service';
import { AlertasService } from '../../Shared/Alertas.service';
import { AccionesModal } from '../../../Data/enums/AccionesModal.enum';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.scss']
})
export class DomicilioComponent implements OnInit {

  titulo = "";
  valor = false;
  focosArr: Array<Array<boolean>>;

  //#region Inicios
  constructor(
    private dialog: MatDialogRef<DomicilioComponent>,
    @Inject(MAT_DIALOG_DATA) public entrada: ModalType<DomicilioModel>,
    private service: DomicilioService,
    private alertas: AlertasService
  ) { }
  ngOnInit() {
    this.validaAccion();
    this.inicioFocos();
  }
  private validaAccion() {
    if (this.entrada.accion === AccionesModal.editar) {
      this.titulo = "Edición de datos del domicilio";
      this.GetDomicilioPorId();
    } else {
      this.titulo = "Inserción de un nuevo domicilio";
    }
  }
  private inicioFocos() {
    this.focosArr = [[false, false], [false, false], [false, false], [false, false],];
  }
  guardadoCorrecto() {
    this.alertas.success("Se ha guardado", "El domicilio se ha guardado correctamente");
    this.CerrarEvent();
  }
  //#endregion

  //#region Eventos
  GuarcaDomicilioEvent() {
    this.entrada.accion === AccionesModal.crear ? this.CreaService() : this.EditaService();
  }
  CerrarEvent() {
    this.dialog.close();
  }
  //#endregion

  //#region Services
  GetDomicilioPorId() {
    this.service.LeerDomicilioPorId(this.entrada.param.id).subscribe(res => {
      this.entrada.param = res;
    })
  }
  async EditaService() {
    let resp: any;
    await this.alertas.confirmacionAlert("Confirmación", "Se modificara el domicilio actual", "Modificar", "Cancelar", async function (r: any) { resp = r });
    if (await resp.value) {
      this.service.EditarDomicilio(this.entrada.param).subscribe(response => {
        this.alertas.success("Se ha guardado el cambio");
        this.CerrarEvent();
      });
    }
  }
  CreaService() {
    this.service.AgregarDomicilio(this.entrada.param).subscribe(res => {
      res.id != 0 ?
        this.guardadoCorrecto() :
        this.alertas.error("Algo salio mal", "Ha ocurrido un error en la accion de guardar");
    });
  }
  //#endregion

}
