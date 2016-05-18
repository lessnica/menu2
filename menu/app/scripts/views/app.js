/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.App = Backbone.View.extend({

    template: JST['app/scripts/templates/app.ejs'],

    el: 'main',

    id: '',

    className: '',

    events: {
      'click .btn-popup-new-order-yes':'newOrder',
      'click .btn-popup-save-order-yes': 'confirmOrder'
    },

    initialize: function () {
      this.model = new Menu.Models.App();
      this.render();
    },

    render: function () {
      this.$el.append(this.template());
      this.modelBinder = new Backbone.ModelBinder();
      var bindings = {
        totalPrice: '.total-price'
      };
      this.modelBinder.bind(this.model, this.el, bindings);
    },

    newOrder: function() {
      Backbone.trigger('newOrder');
    },

    confirmOrder: function() {
      Backbone.trigger('confirmOrder');
    }



  });

})();
