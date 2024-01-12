import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  датаПроведения: DS.attr('date'),
  группыВозраст: DS.belongsTo('i-i-s-prilozhenie-ispravl-группы-возраст', { inverse: null, async: false }),
  местоПроведения: DS.belongsTo('i-i-s-prilozhenie-ispravl-место-проведения', { inverse: null, async: false }),
  графикМатчей: DS.belongsTo('i-i-s-prilozhenie-ispravl-график-матчей', { inverse: 'тЧГрафика', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-т-ч-графика.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПроведения: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-т-ч-графика.validations.датаПроведения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  группыВозраст: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-т-ч-графика.validations.группыВозраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  местоПроведения: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-т-ч-графика.validations.местоПроведения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  графикМатчей: {
    descriptionKey: 'models.i-i-s-prilozhenie-ispravl-т-ч-графика.validations.графикМатчей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧГрафикаE', 'i-i-s-prilozhenie-ispravl-т-ч-графика', {
    датаПроведения: attr('Дата проведения', { index: 0 }),
    время: attr('Время', { index: 1 }),
    местоПроведения: belongsTo('i-i-s-prilozhenie-ispravl-место-проведения', 'Место проведения', {
      наименование: attr('Наименование', { index: 3, hidden: true }),
      адрес: attr('Адрес', { index: 4 })
    }, { index: 2, displayMemberPath: 'наименование' }),
    группыВозраст: belongsTo('i-i-s-prilozhenie-ispravl-группы-возраст', 'Группы возраст', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' })
  });
};
