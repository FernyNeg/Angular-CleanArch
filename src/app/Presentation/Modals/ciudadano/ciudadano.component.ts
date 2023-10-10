import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { ICiudadanoService } from 'src/app/Core/Interfaces/services/ICiudadano.Service';
import { IDomicilioService } from 'src/app/Core/Interfaces/services/IDomicilio.Service';
import { CiudadanoModel } from 'src/app/Data/Model/Ciudadano.Model';
import { ModalType } from 'src/app/Data/Model/Shared/ModalType';
import { AlertasService } from '../../Shared/Alertas.service';
import { DomicilioModel } from 'src/app/Data/Model/Domicilio.Model';
import { AccionesModal } from 'src/app/Data/enums/AccionesModal.enum';
import { ConsultaList } from 'src/app/Data/Model/Shared/ConsultaList';

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.scss']
})
export class CiudadanoComponent implements OnInit {

  titulo = "";
  valor = false;
  focosArr: Array<Array<boolean>> = [];
  domicilios: DomicilioModel[] = [];

  //#region Inicios
  constructor(
    // private dialog: MatDialogRef<CiudadanoComponent>,
    @Inject(MAT_DIALOG_DATA) public entrada: ModalType<CiudadanoModel>,
    private service: ICiudadanoService,
    private serviceDom: IDomicilioService,
    private alertas: AlertasService
  ) { }
  ngOnInit() {
    this.validaAccion();
    this.inicioFocos();
  }
  private validaAccion() {
    if (this.entrada.accion === AccionesModal.editar) {
      this.titulo = "Edición de datos de ciudadano";
      this.ConsultaInicialService();
    } else {
      this.titulo = "Inserción de un nuevo ciudadano";
      this.consultaDomiciliosService();
    }
  }
  private inicioFocos() {
    this.focosArr = [
      [false, false],
      [false, false],
      [false, false],
    ];
  }
  //#endregion

  //#region Metodos
  CombinaSeleccionados() {
    this.domicilios.forEach(d => {
      if (this.entrada.param.domicilios.find(domi => { return domi.id === d.id })) d.activo = true;
    });
  }
  async confirmaModicifacion() {
    let resp: any;
    await this.alertas.confirmacionAlert("Confirmación", "Se modificara el ciudadano actual", "Modificar", "Cancelar",
      async function (r: any) { resp = r });
    if (await resp.value) {
      this.EditaService();
    }
  }
  validaSeleccionadas() {
    this.entrada.param.domicilios = this.domicilios.filter(d => { if (d.activo === true) return d });
    this.entrada.accion === AccionesModal.crear ? this.CreaService() : this.confirmaModicifacion();
  }
  guardadoCorrecto() {
    this.alertas.success("Se ha guardado", "El domicilio se ha guardado correctamente");
    this.CerrarEvent();
  }
  //#endregion

  //#region Eventos
  GuarcaCiudadanoEvent() {
    this.validaSeleccionadas();
  }
  CerrarEvent() {
    // this.dialog.close();
  }
  //#endregion

  //#region Services
  ConsultaInicialService() {
    forkJoin([
      this.service.LeerCiudadanoPorId(this.entrada.param.id),
      this.serviceDom.LeerDomiciolioList(new ConsultaList<DomicilioModel>())])
      .subscribe(res => {
        this.entrada.param = res[0];
        this.domicilios = res[1];
        this.CombinaSeleccionados();
      });
  }
  EditaService() {
    this.service.EditarCiudadano(this.entrada.param).subscribe(response => {
      this.alertas.success("Se ha guardado el cambio");
      this.CerrarEvent();
    });
  }
  CreaService() {
    this.service.AgregarCiudadano(this.entrada.param).subscribe(res => {
      res.id != 0 ?
        this.guardadoCorrecto() :
        this.alertas.error("Algo salio mal", "Ha ocurrido un error en la accion de guardar");
    });
  }
  consultaDomiciliosService() {
    this.serviceDom.LeerDomiciolioList(new ConsultaList<DomicilioModel>()).subscribe(res => { this.domicilios = res; this.CombinaSeleccionados(); });
  }
  //#endregion

}
