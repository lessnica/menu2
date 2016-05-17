/*global Menu, Backbone*/

Menu.Models = Menu.Models || {};

(function () {
  'use strict';

  Menu.Models.Basket = Backbone.Model.extend({

    url: '',

    initialize: function() {
      this.listenTo(this, 'change', this.countPrice);
      this.countPrice();
    },

    defaults: {
      dishId:'0',
      name:'',
      quantity:0,
      price:0,
      totalPriceItem:0
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    },

    countPrice: function() {
      this.set('totalPriceItem', (this.get('price') * this.get('quantity')).toFixed(2));
      //console.log(this.get('totalPriceItem'));
    }

  });

})();
