import { inject, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { WebAPI } from './api/web-api';
// import 'layui-src'
///// <reference path="../types/index.d.ts" />
//import layui from 'Layui'

// declare var layui;
@inject(WebAPI)
export class App {
  router: Router;
  constructor(public api: WebAPI) {
  }
  /* constructor(api) {
    this.api = api;
  } */
  // colors config
  primaryColor = '#20222A'; // 
  primaryTextColor = '#eee';
  secondaryColor = '#e91e63';
  errorColor = '#f44336';
  successColor = '#4caf50';
  linkColor = '#039be5';
  public message: string = 'Hello Demo!';
  layer: any

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '首页';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('views/no-selection'), title: 'Select' },
      // { route: 'contacts/:id', moduleId: PLATFORM.moduleName('views/contact-detail'), name: 'contacts' },
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

  activate() {

  }

  attached() {
    // console.log('1111', layui);
    // layui.config({
    //   dir: '../node_modules/layui-src/dist/'
    // })
    // layui.define(['layer', 'form'], () => {
    //   var layer = layui.layer
    //     , form = layui.form;
    //   layer.msg('Hello World');
    // });

    //this.layer.msg('Hello World');
  }
}



