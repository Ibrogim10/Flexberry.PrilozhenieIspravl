import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-ispravl-состав-команды', 'Unit | Model | i-i-s-prilozhenie-ispravl-состав-команды', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-ispravl-график-матчей',
    'model:i-i-s-prilozhenie-ispravl-группы-возраст',
    'model:i-i-s-prilozhenie-ispravl-место-проведения',
    'model:i-i-s-prilozhenie-ispravl-состав-команды',
    'model:i-i-s-prilozhenie-ispravl-сотрудники',
    'model:i-i-s-prilozhenie-ispravl-спортсмены',
    'model:i-i-s-prilozhenie-ispravl-т-ч-графика',
    'model:i-i-s-prilozhenie-ispravl-т-ч-состав-спорт',
    'model:i-i-s-prilozhenie-ispravl-т-ч-состава-тренер',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
