/*global Menu, Backbone*/

Menu.Collections = Menu.Collections || {};

(function () {
  'use strict';

  Menu.Collections.Busket = Backbone.Collection.extend({

    model: Menu.Models.Busket

  });

})();
