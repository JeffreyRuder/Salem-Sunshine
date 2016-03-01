import Ember from 'ember';

export default Ember.Component.extend({

  today: Ember.computed(function() {
    return moment().format('MM/DD/YYYY');
  })

  actions: {
    executeSearch() {
      if (this.get('search_date') !== undefined) {
        var date = moment(this.get('search_date')).format('YYYY-MM-DD');
      } else {
        var date = moment().subtract(7, 'days').format('YYYY-MM-DD');
      }
      var params = {
        search: this.get('search'),
        date: date
      };
      this.set('search', undefined);
      this.set('search_date', undefined);
      this.sendAction('executeSearch', params);
    }
  }
});
