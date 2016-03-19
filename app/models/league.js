import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  alias: DS.attr('string'),
  country: DS.belongsTo('country'),
  teams: DS.hasMany('team')
});
