/*global Menu, Backbone*/

Menu.Models = Menu.Models || {};

(function () {
  'use strict';

  Menu.Models.Dish = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
      dishId:'',
      img:'',
      name:'Unknown',
      description: '',
      price:0
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
