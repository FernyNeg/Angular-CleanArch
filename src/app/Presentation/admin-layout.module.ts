import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { MatDialogModule } from '@angular/material/dialog';

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "./Pages/dashboard/dashboard.component";
import { UserComponent } from "./Pages/user/user.component";
import { TablesComponent } from "./Pages/tables/tables.component";
import { IconsComponent } from "./Pages/icons/icons.component";
import { TypographyComponent } from "./Pages/typography/typography.component";
import { NotificationsComponent } from "./Pages/notifications/notifications.component";
import { MapComponent } from "./Pages/map/map.component";
import { CiudadanosComponent } from "./Pages/ciudadanos/ciudadanos.component";
import { DomiciliosComponent } from "./Pages/domicilios/domicilios.component";
import { CiudadanoComponent } from "./Modals/ciudadano/ciudadano.component";
import { DomicilioComponent } from "./Modals/domicilio/domicilio.component";
import { ServicesModule } from "../Services/Services.Module";
import { DataModule } from "../Data/Data.Module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    // MatDialogModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    CiudadanosComponent,
    CiudadanoComponent,
    DomiciliosComponent,
    DomicilioComponent
  ],
  providers: [ServicesModule, DataModule],
})
export class AdminLayoutModule { }
