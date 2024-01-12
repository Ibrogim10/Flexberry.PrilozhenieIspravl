import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-prilozhenie-ispravl-состав-команды-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-prilozhenie-ispravl-т-ч-состава-тренер+сотрудники':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'сотрудники',
            projection: 'СотрудникиL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-prilozhenie-ispravl-т-ч-состав-спорт+спортсмены':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'спортсмены',
            projection: 'СпортсменыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
