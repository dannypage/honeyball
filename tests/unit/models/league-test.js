import { moduleForModel, test } from 'ember-qunit';

moduleForModel('league', 'Unit | Model | league', {
  // Specify the other units that are required for this test.
  needs: ['model:country']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
