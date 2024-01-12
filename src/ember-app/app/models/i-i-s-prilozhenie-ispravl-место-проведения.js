import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МестоПроведенияMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-ispravl-место-проведения';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МестоПроведенияMixin, Validations, {
});

defineProjections(Model);

export default Model;
