import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  alias: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.belongsTo('country'),
  league: DS.belongsTo('league')
});
