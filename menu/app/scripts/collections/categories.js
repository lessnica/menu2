/*global Menu, Backbone*/

Menu.Collections = Menu.Collections || {};

(function () {
  'use strict';

  Menu.Collections.Categories = Backbone.Collection.extend({

    model: Menu.Models.Categories

  });

})();
