import { Routes } from "@angular/router";
import { DashboardComponent } from "./Pages/dashboard/dashboard.component";
import { IconsComponent } from "./Pages/icons/icons.component";
import { MapComponent } from "./Pages/map/map.component";
import { NotificationsComponent } from "./Pages/notifications/notifications.component";
import { UserComponent } from "./Pages/user/user.component";
import { TablesComponent } from "./Pages/tables/tables.component";
import { TypographyComponent } from "./Pages/typography/typography.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
];
