import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-ispravl-график-матчей-l');
  this.route('i-i-s-prilozhenie-ispravl-график-матчей-e',
  { path: 'i-i-s-prilozhenie-ispravl-график-матчей-e/:id' });
  this.route('i-i-s-prilozhenie-ispravl-график-матчей-e.new',
  { path: 'i-i-s-prilozhenie-ispravl-график-матчей-e/new' });
  this.route('i-i-s-prilozhenie-ispravl-группы-возраст-l');
  this.route('i-i-s-prilozhenie-ispravl-группы-возраст-e',
  { path: 'i-i-s-prilozhenie-ispravl-группы-возраст-e/:id' });
  this.route('i-i-s-prilozhenie-ispravl-группы-возраст-e.new',
  { path: 'i-i-s-prilozhenie-ispravl-группы-возраст-e/new' });
  this.route('i-i-s-prilozhenie-ispravl-место-проведения-l');
  this.route('i-i-s-prilozhenie-ispravl-место-проведения-e',
  { path: 'i-i-s-prilozhenie-ispravl-место-проведения-e/:id' });
  this.route('i-i-s-prilozhenie-ispravl-место-проведения-e.new',
  { path: 'i-i-s-prilozhenie-ispravl-место-проведения-e/new' });
  this.route('i-i-s-prilozhenie-ispravl-состав-команды-l');
  this.route('i-i-s-prilozhenie-ispravl-состав-команды-e',
  { path: 'i-i-s-prilozhenie-ispravl-состав-команды-e/:id' });
  this.route('i-i-s-prilozhenie-ispravl-состав-команды-e.new',
  { path: 'i-i-s-prilozhenie-ispravl-состав-команды-e/new' });
  this.route('i-i-s-prilozhenie-ispravl-сотрудники-l');
  this.route('i-i-s-prilozhenie-ispravl-сотрудники-e',
  { path: 'i-i-s-prilozhenie-ispravl-сотрудники-e/:id' });
  this.route('i-i-s-prilozhenie-ispravl-сотрудники-e.new',
  { path: 'i-i-s-prilozhenie-ispravl-сотрудники-e/new' });
  this.route('i-i-s-prilozhenie-ispravl-спортсмены-l');
  this.route('i-i-s-prilozhenie-ispravl-спортсмены-e',
  { path: 'i-i-s-prilozhenie-ispravl-спортсмены-e/:id' });
  this.route('i-i-s-prilozhenie-ispravl-спортсмены-e.new',
  { path: 'i-i-s-prilozhenie-ispravl-спортсмены-e/new' });
});

export default Router;
