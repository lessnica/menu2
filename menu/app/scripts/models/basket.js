/*global Menu, Backbone*/
/*Basket model responsible for 1 item in the basket*/

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

    countPrice: function() {
      this.set('totalPriceItem', (this.get('price') * this.get('quantity')).toFixed(2));
      }

  });

})();
