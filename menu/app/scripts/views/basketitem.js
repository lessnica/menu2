Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.BasketItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/basketitem.ejs'],

    tagName: 'li',

    className: 'row list-group-item text-center',

    events: {

    },

    initialize: function () {
      this.render();
    },

    render: function () {

      this.modelBinder = new Backbone.ModelBinder();
      this.$el.html(this.template());
      $('.basket').append(this.$el);
      var bindings = {
        name: '.order-name',
        quantity: '.amount',
        price: '.price-basket-item'
      };
      this.modelBinder.bind(this.model, this.el, bindings);
    }
  });

})();


