import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesService } from '../services/routes.service';
import * as COMPONENTS from './intra';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// const routes: Routes = [
//   { path: 'home', component: COMPONENTS.HomeComponent },

//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   {
//     path: 'events',
//     component: COMPONENTS.EventsComponent
//   },
//   {
//     path: 'news',
//     component: COMPONENTS.NewsComponent
//   },
//   {
//     path: 'events/:eventId',
//     component: COMPONENTS.SingleEventComponent
//   },
//   {
//     path: 'news/:newsId',
//     component: COMPONENTS.SingleNewsComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild([])],
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [
    COMPONENTS.HomeComponent
  ],
  providers: [
    RoutesService,

    {
      'provide': APP_INITIALIZER,
      'useFactory': configurationInit,
      'deps': [RoutesService],
      'multi': true,
    }
  ],

})
export class IntraRoutingModule { }
export function configurationInit(routeService: RoutesService) {
  return () => routeService.loadSettings();
};
