/*global Menu, Backbone*/
/*Categories collection contains all cards of categories*/

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
