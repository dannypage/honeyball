import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fifaName: DS.attr('string'),
  teams: DS.hasMany('team'),
  leagues: DS.hasMany('league')
});
