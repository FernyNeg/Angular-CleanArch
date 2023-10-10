import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-plugin',
  templateUrl: './fixed-plugin.component.html',
  styleUrls: ['./fixed-plugin.component.scss']
})
export class FixedPluginComponent {
  public sidebarColor: string = "red";

  changeSidebarColor(color: any) {
    let sidebar = document.getElementsByClassName('sidebar')[0];
    let mainPanel = document.getElementsByClassName('main-panel')[0];
    this.sidebarColor = color;
    if (sidebar != undefined) { sidebar.setAttribute('data', color); }
    if (mainPanel != undefined) { mainPanel.setAttribute('data', color); }
  }
  changeDashboardColor(color: any) {
    let body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
      body.classList.add(color);
    }
    else if (body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }

}
