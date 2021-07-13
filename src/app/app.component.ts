import { Component } from '@angular/core';
import { menuVM } from './models/menu';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'umbracoConfig-frontend';
  menu: menuVM[] = []
  constructor(private _menuService: MenuService) {

    this._menuService.getMenu().subscribe({
      next: (res) => {
        this.menu = res;
        console.log(res)
        // this.isLoaded = true;
      },
      error: (er) => {
        console.error(er);

      },
    });
  }
}
