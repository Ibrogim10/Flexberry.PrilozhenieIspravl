import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-prilozhenie-ispravl-график-матчей-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-prilozhenie-ispravl-т-ч-графика+местоПроведения':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'местоПроведения',
            projection: 'МестоПроведенияL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-prilozhenie-ispravl-т-ч-графика+группыВозраст':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'группыВозраст',
            projection: 'ГруппыВозрастL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
