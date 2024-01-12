import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date', { defaultValue() { return new Date(); } }),
  сотрудники: DS.belongsTo('i-i-s-prilozhenie-ispravl-сотрудники', { inverse: null, async: false }),
  тЧГрафика: DS.hasMany('i-i-s-prilozhenie-ispravl-т-ч-графика', { inverse: 'графикМатчей', async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-график-матчей.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-график-матчей.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧГрафика: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-график-матчей.validations.тЧГрафика.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикМатчейE', 'i-i-s-prilozhenie-ispravl-график-матчей', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    сотрудники: belongsTo('i-i-s-prilozhenie-ispravl-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    тЧГрафика: hasMany('i-i-s-prilozhenie-ispravl-т-ч-графика', 'Т ч графика', {
      датаПроведения: attr('Дата проведения', { index: 0 }),
      время: attr('Время', { index: 1 }),
      местоПроведения: belongsTo('i-i-s-prilozhenie-ispravl-место-проведения', 'Место проведения', {
        наименование: attr('Наименование', { index: 3, hidden: true }),
        адрес: attr('Адрес', { index: 4 })
      }, { index: 2, displayMemberPath: 'наименование' }),
      группыВозраст: belongsTo('i-i-s-prilozhenie-ispravl-группы-возраст', 'Группы возраст', {
        наименование: attr('Наименование', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ГрафикМатчейL', 'i-i-s-prilozhenie-ispravl-график-матчей', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    сотрудники: belongsTo('i-i-s-prilozhenie-ispravl-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
