/*global Menu, Backbone*/
/*Dish model responsible for 1 dish*/
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
    }

  });

})();
