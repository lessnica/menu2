/*global Menu, Backbone*/

Menu.Collections = Menu.Collections || {};

(function () {
  'use strict';

  Menu.Collections.Categories = Backbone.Collection.extend({
    url: '/categories.json',
    initialize: function () {
        this.fetch({
            reset: true
        });
    },
    model: Menu.Models.Categories

  });

})();
