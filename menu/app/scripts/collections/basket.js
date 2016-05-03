/*global Menu, Backbone*/

Menu.Collections = Menu.Collections || {};

(function () {
  'use strict';

  Menu.Collections.Basket = Backbone.Collection.extend({

    model: Menu.Models.Basket

  });

})();
