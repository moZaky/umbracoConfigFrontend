import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import * as COMPONENTS from "../components/intra";
import { routeVM } from '../models/routes';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  routes: Routes = []

  constructor(private http: HttpClient, private router: Router) {
    this.routes.push
      (
        { path: 'home', component: COMPONENTS.HomeComponent },

        { path: '', redirectTo: '/home', pathMatch: 'full' }
      )
  }

  getRoutes(): Observable<routeVM[]> {

    return this.http.get<routeVM[]>(`http://umbracoconfig.com/api/Test/GetRoutes`);
  }

  loadSettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        this.getRoutes()
          .subscribe(
            response => {
              this.configureRoutes(response)
              console.log(this.routes)

              this.router.resetConfig(this.routes)
              resolve(true);
            },
            err => {
              console.log(err);
              reject(false);
            }
          );
      });
    });
  }
  private configureRoutes(routes: routeVM[]) {

    const components = [COMPONENTS.NewsComponent, COMPONENTS.EventsComponent, COMPONENTS.SingleEventComponent, COMPONENTS.SingleNewsComponent]
    routes.forEach(route => {
      let singleRoute = {
        path: route.path,
        component: route.component = components.find((component) => {
          return component.name === route.component;
        }),
      };

      this.routes.push(singleRoute)
    })
  }
}
