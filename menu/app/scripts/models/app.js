/*global Menu, Backbone*/

Menu.Models = Menu.Models || {};

(function () {
  'use strict';

  Menu.Models.App = Backbone.Model.extend({

    url: 'orders.json',

    initialize: function() {
      this.listenTo(Backbone, 'collectionBasketChanged', this.countSum);
      this.listenTo(Backbone, 'collectionBasketCreated', this.countSum);
    },



    defaults: {
     totalPrice:0,
      collection:[]
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    },

    countSum: function(collection) {
      this.set('collection', collection);

      //can use reduce method
      var sum = 0;
      collection.each(function(item) {
        sum += parseFloat(item.get('totalPriceItem'));
      });
      this.set('totalPrice', (sum).toFixed(2));
    }

  });

})();
