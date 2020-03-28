import { Aurelia } from 'aurelia-framework'
import * as environment from '../config/environment.json';
import { PLATFORM } from 'aurelia-pal';
// import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'materialize-css';
//import 'layui-src/dist/css/layui.css';
//import 'layui-src/dist/layui'

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn')

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  // Install and configure the plugin
  aurelia.use.plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll());

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
