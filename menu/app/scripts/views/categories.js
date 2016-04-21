/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Categories = Backbone.View.extend({
    el:'.collections',

    template: JST['app/scripts/templates/categories.ejs'],

    events: {},

    initialize: function () {

      this.collections = new Menu.Collections();
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
