/*global Menu, Backbone*/

Menu.Models = Menu.Models || {};

(function () {
  'use strict';

  Menu.Models.Dish = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
