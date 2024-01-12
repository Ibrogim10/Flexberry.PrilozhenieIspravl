import {
  defineNamespace,
  defineProjections,
  Model as МестоПроведенияMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-ispravl-место-проведения';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МестоПроведенияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
