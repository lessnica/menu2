/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Busket = Backbone.View.extend({

    template: JST['app/scripts/templates/busket.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
