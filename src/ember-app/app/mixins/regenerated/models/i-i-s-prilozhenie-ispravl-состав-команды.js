import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяКоманды: DS.attr('string'),
  группыВозраст: DS.belongsTo('i-i-s-prilozhenie-ispravl-группы-возраст', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-prilozhenie-ispravl-сотрудники', { inverse: null, async: false }),
  тЧСоставаТренер: DS.hasMany('i-i-s-prilozhenie-ispravl-т-ч-состава-тренер', { inverse: 'составКоманды', async: false }),
  тЧСоставСпорт: DS.hasMany('i-i-s-prilozhenie-ispravl-т-ч-состав-спорт', { inverse: 'составКоманды', async: false })
});

export let ValidationRules = {
  имяКоманды: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-состав-команды.validations.имяКоманды.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  группыВозраст: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-состав-команды.validations.группыВозраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-состав-команды.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧСоставаТренер: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-состав-команды.validations.тЧСоставаТренер.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧСоставСпорт: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-состав-команды.validations.тЧСоставСпорт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставКомандыE', 'i-i-s-prilozhenie-ispravl-состав-команды', {
    имяКоманды: attr('Имя команды', { index: 0 }),
    группыВозраст: belongsTo('i-i-s-prilozhenie-ispravl-группы-возраст', 'Группы возраст', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' }),
    тЧСоставаТренер: hasMany('i-i-s-prilozhenie-ispravl-т-ч-состава-тренер', 'Т ч состава тренер', {
      сотрудники: belongsTo('i-i-s-prilozhenie-ispravl-сотрудники', 'Сотрудники', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        должность: attr('Должность', { index: 2 })
      }, { index: 0, displayMemberPath: 'фИО' })
    }),
    тЧСоставСпорт: hasMany('i-i-s-prilozhenie-ispravl-т-ч-состав-спорт', 'Т ч состав спорт', {
      спортсмены: belongsTo('i-i-s-prilozhenie-ispravl-спортсмены', 'Спортсмены', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        датаРождения: attr('Дата рождения', { index: 3 })
      }, { index: 0, displayMemberPath: 'фИО' }),
      номерСпортсмена: attr('Номер спортсмена', { index: 2 })
    })
  });

  modelClass.defineProjection('СоставКомандыL', 'i-i-s-prilozhenie-ispravl-состав-команды', {
    имяКоманды: attr('Имя команды', { index: 0 }),
    группыВозраст: belongsTo('i-i-s-prilozhenie-ispravl-группы-возраст', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
