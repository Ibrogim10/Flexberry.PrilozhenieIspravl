import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenieIspravlГрафикМатчейLForm from './forms/i-i-s-prilozhenie-ispravl-график-матчей-l';
import IISPrilozhenieIspravlГруппыВозрастLForm from './forms/i-i-s-prilozhenie-ispravl-группы-возраст-l';
import IISPrilozhenieIspravlМестоПроведенияLForm from './forms/i-i-s-prilozhenie-ispravl-место-проведения-l';
import IISPrilozhenieIspravlСоставКомандыLForm from './forms/i-i-s-prilozhenie-ispravl-состав-команды-l';
import IISPrilozhenieIspravlСотрудникиLForm from './forms/i-i-s-prilozhenie-ispravl-сотрудники-l';
import IISPrilozhenieIspravlСпортсменыLForm from './forms/i-i-s-prilozhenie-ispravl-спортсмены-l';
import IISPrilozhenieIspravlГрафикМатчейEForm from './forms/i-i-s-prilozhenie-ispravl-график-матчей-e';
import IISPrilozhenieIspravlГруппыВозрастEForm from './forms/i-i-s-prilozhenie-ispravl-группы-возраст-e';
import IISPrilozhenieIspravlМестоПроведенияEForm from './forms/i-i-s-prilozhenie-ispravl-место-проведения-e';
import IISPrilozhenieIspravlСоставКомандыEForm from './forms/i-i-s-prilozhenie-ispravl-состав-команды-e';
import IISPrilozhenieIspravlСотрудникиEForm from './forms/i-i-s-prilozhenie-ispravl-сотрудники-e';
import IISPrilozhenieIspravlСпортсменыEForm from './forms/i-i-s-prilozhenie-ispravl-спортсмены-e';
import IISPrilozhenieIspravlГрафикМатчейModel from './models/i-i-s-prilozhenie-ispravl-график-матчей';
import IISPrilozhenieIspravlГруппыВозрастModel from './models/i-i-s-prilozhenie-ispravl-группы-возраст';
import IISPrilozhenieIspravlМестоПроведенияModel from './models/i-i-s-prilozhenie-ispravl-место-проведения';
import IISPrilozhenieIspravlСоставКомандыModel from './models/i-i-s-prilozhenie-ispravl-состав-команды';
import IISPrilozhenieIspravlСотрудникиModel from './models/i-i-s-prilozhenie-ispravl-сотрудники';
import IISPrilozhenieIspravlСпортсменыModel from './models/i-i-s-prilozhenie-ispravl-спортсмены';
import IISPrilozhenieIspravlТЧГрафикаModel from './models/i-i-s-prilozhenie-ispravl-т-ч-графика';
import IISPrilozhenieIspravlТЧСоставСпортModel from './models/i-i-s-prilozhenie-ispravl-т-ч-состав-спорт';
import IISPrilozhenieIspravlТЧСоставаТренерModel from './models/i-i-s-prilozhenie-ispravl-т-ч-состава-тренер';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-ispravl-график-матчей': IISPrilozhenieIspravlГрафикМатчейModel,
    'i-i-s-prilozhenie-ispravl-группы-возраст': IISPrilozhenieIspravlГруппыВозрастModel,
    'i-i-s-prilozhenie-ispravl-место-проведения': IISPrilozhenieIspravlМестоПроведенияModel,
    'i-i-s-prilozhenie-ispravl-состав-команды': IISPrilozhenieIspravlСоставКомандыModel,
    'i-i-s-prilozhenie-ispravl-сотрудники': IISPrilozhenieIspravlСотрудникиModel,
    'i-i-s-prilozhenie-ispravl-спортсмены': IISPrilozhenieIspravlСпортсменыModel,
    'i-i-s-prilozhenie-ispravl-т-ч-графика': IISPrilozhenieIspravlТЧГрафикаModel,
    'i-i-s-prilozhenie-ispravl-т-ч-состав-спорт': IISPrilozhenieIspravlТЧСоставСпортModel,
    'i-i-s-prilozhenie-ispravl-т-ч-состава-тренер': IISPrilozhenieIspravlТЧСоставаТренерModel
  },

  'application-name': 'Prilozhenie ispravl',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie ispravl',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie ispravl',
          title: 'Prilozhenie ispravl'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-prilozhenie-ispravl-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        спортсмены: {
          caption: 'Спортсмены',
          title: 'Спортсмены',
          'i-i-s-prilozhenie-ispravl-состав-команды-l': {
            caption: 'Состав команды',
            title: ''
          },
          'i-i-s-prilozhenie-ispravl-спортсмены-l': {
            caption: 'Спортсмены',
            title: ''
          },
          'i-i-s-prilozhenie-ispravl-группы-возраст-l': {
            caption: 'Группы возраст',
            title: ''
          }
        },
        графики: {
          caption: 'Графики',
          title: 'Графики',
          'i-i-s-prilozhenie-ispravl-график-матчей-l': {
            caption: 'График матчей',
            title: ''
          }
        },
        'место-проведения': {
          caption: 'Место проведения',
          title: 'Место проведения',
          'i-i-s-prilozhenie-ispravl-место-проведения-l': {
            caption: 'Место проведения',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-ispravl-график-матчей-l': IISPrilozhenieIspravlГрафикМатчейLForm,
    'i-i-s-prilozhenie-ispravl-группы-возраст-l': IISPrilozhenieIspravlГруппыВозрастLForm,
    'i-i-s-prilozhenie-ispravl-место-проведения-l': IISPrilozhenieIspravlМестоПроведенияLForm,
    'i-i-s-prilozhenie-ispravl-состав-команды-l': IISPrilozhenieIspravlСоставКомандыLForm,
    'i-i-s-prilozhenie-ispravl-сотрудники-l': IISPrilozhenieIspravlСотрудникиLForm,
    'i-i-s-prilozhenie-ispravl-спортсмены-l': IISPrilozhenieIspravlСпортсменыLForm,
    'i-i-s-prilozhenie-ispravl-график-матчей-e': IISPrilozhenieIspravlГрафикМатчейEForm,
    'i-i-s-prilozhenie-ispravl-группы-возраст-e': IISPrilozhenieIspravlГруппыВозрастEForm,
    'i-i-s-prilozhenie-ispravl-место-проведения-e': IISPrilozhenieIspravlМестоПроведенияEForm,
    'i-i-s-prilozhenie-ispravl-состав-команды-e': IISPrilozhenieIspravlСоставКомандыEForm,
    'i-i-s-prilozhenie-ispravl-сотрудники-e': IISPrilozhenieIspravlСотрудникиEForm,
    'i-i-s-prilozhenie-ispravl-спортсмены-e': IISPrilozhenieIspravlСпортсменыEForm
  },

});

export default translations;
