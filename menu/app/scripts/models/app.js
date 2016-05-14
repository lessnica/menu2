/*global Menu, Backbone*/

Menu.Models = Menu.Models || {};

(function () {
  'use strict';

  Menu.Models.App = Backbone.Model.extend({

    url: '',

    initialize: function() {

    },

    defaults: {
     totalPrice:0,
      collection:[]
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }



  });

})();
