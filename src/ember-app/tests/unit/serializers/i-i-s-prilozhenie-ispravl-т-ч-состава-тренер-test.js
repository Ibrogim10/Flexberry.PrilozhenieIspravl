import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-ispravl-т-ч-состава-тренер', 'Unit | Serializer | i-i-s-prilozhenie-ispravl-т-ч-состава-тренер', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-ispravl-т-ч-состава-тренер',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
