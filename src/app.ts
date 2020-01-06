import { inject, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { WebAPI } from './api/web-api';

@inject(WebAPI)
export class App {
  router: Router;
  constructor(public api: WebAPI) { }
  /* constructor(api) {
    this.api = api;
  } */

  public message: string = 'Hello World!';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('views/no-selection'), title: 'Select' },
      { route: 'contacts/:id', moduleId: PLATFORM.moduleName('views/contact-detail'), name: 'contacts' },
    ]);

    // configureRouter(config: RouterConfiguration, router: Router): void {
    //   this.router = router;
    //   config.title = 'Title';
    //   config.map([
    //     { route: 'address', name: 'name', moduleId:'./url', nav:true,  title:'title' }
    //   ]);
    // }

    this.router = router;
  }
}



