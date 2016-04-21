/*global Menu, Backbone*/

Menu.Collections = Menu.Collections || {};

(function () {
  'use strict';

  Menu.Collections.Dish = Backbone.Collection.extend({

    model: Menu.Models.Dish

  });

})();
