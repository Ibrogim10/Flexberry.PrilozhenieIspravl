import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-prilozhenie-ispravl-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-ispravl-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-ispravl-сотрудники-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.спортсмены.caption'),
          title: i18n.t('forms.application.sitemap.спортсмены.title'),
          children: [{
            link: 'i-i-s-prilozhenie-ispravl-состав-команды-l',
            caption: i18n.t('forms.application.sitemap.спортсмены.i-i-s-prilozhenie-ispravl-состав-команды-l.caption'),
            title: i18n.t('forms.application.sitemap.спортсмены.i-i-s-prilozhenie-ispravl-состав-команды-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-ispravl-спортсмены-l',
            caption: i18n.t('forms.application.sitemap.спортсмены.i-i-s-prilozhenie-ispravl-спортсмены-l.caption'),
            title: i18n.t('forms.application.sitemap.спортсмены.i-i-s-prilozhenie-ispravl-спортсмены-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-ispravl-группы-возраст-l',
            caption: i18n.t('forms.application.sitemap.спортсмены.i-i-s-prilozhenie-ispravl-группы-возраст-l.caption'),
            title: i18n.t('forms.application.sitemap.спортсмены.i-i-s-prilozhenie-ispravl-группы-возраст-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.графики.caption'),
          title: i18n.t('forms.application.sitemap.графики.title'),
          children: [{
            link: 'i-i-s-prilozhenie-ispravl-график-матчей-l',
            caption: i18n.t('forms.application.sitemap.графики.i-i-s-prilozhenie-ispravl-график-матчей-l.caption'),
            title: i18n.t('forms.application.sitemap.графики.i-i-s-prilozhenie-ispravl-график-матчей-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.место-проведения.caption'),
          title: i18n.t('forms.application.sitemap.место-проведения.title'),
          children: [{
            link: 'i-i-s-prilozhenie-ispravl-место-проведения-l',
            caption: i18n.t('forms.application.sitemap.место-проведения.i-i-s-prilozhenie-ispravl-место-проведения-l.caption'),
            title: i18n.t('forms.application.sitemap.место-проведения.i-i-s-prilozhenie-ispravl-место-проведения-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})