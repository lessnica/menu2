/*global Menu, Backbone*/

Menu.Models = Menu.Models || {};

(function () {
  'use strict';

  Menu.Models.Basket = Backbone.Model.extend({

    url: '',

    initialize: function() {

    },

    defaults: {
      dishId:'0',
      name:'',
      quantity:0,
      price:0
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }



  });

})();
