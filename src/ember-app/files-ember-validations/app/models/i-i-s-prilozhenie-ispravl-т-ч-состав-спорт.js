import {
  defineNamespace,
  defineProjections,
  Model as ТЧСоставСпортMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-ispravl-т-ч-состав-спорт';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСоставСпортMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
