import { environment } from "src/environments/environment"

const apiRuta = environment.ApiUrl + 'controller/';

export const UrlConstantes = {

  /**Ciudadanos Rutes */
  leerCiudadanos: apiRuta + "ciudadano/leerCiudadanos",
  editarCiudadano: apiRuta + "ciudadano/EditarCiudadano",
  borrarCiudadano: apiRuta + "ciudadano/BorrarCiudadano",
  agregarCiudadano: apiRuta + "ciudadano/AgregarCiudadano",
  leerCiudadanoPorId: apiRuta + "ciudadano/LeerCiudadanoPorId",

  /**Domicilios Rutes */
  agregarDomicilio: apiRuta + "domicilio/AgregarDomicilio",
  editarDomicilio: apiRuta + "domicilio/EditarDomicilio",
  borrarDomicilio: apiRuta + "domicilio/BorrarDomicilio",
  leerDomicilios: apiRuta + "domicilio/leerDomicilios",
  leerDomicilioPorId: apiRuta + "domicilio/LeerDomicilioPorId",
}