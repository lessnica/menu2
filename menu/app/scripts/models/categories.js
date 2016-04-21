/*global Menu, Backbone*/

Menu.Models = Menu.Models || {};

(function () {
  'use strict';

  Menu.Models.Categories = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
      img:'',
      name:'Unknown',
      file: 'unknown.json'
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
