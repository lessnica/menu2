Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.BasketItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/basketitem.ejs'],

    tagName: 'li',

    className: 'row list-group-item text-center',

    events: {
      'click .minus':'minusButton',
      'click .plus':'plusButton',
      'click .delete':'deleteButton'

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
    },

    minusButton: function() {
      this.model.set('quantity',Math.max(this.model.get('quantity')-1,1));
    },

    plusButton: function() {
      this.model.set('quantity',Math.min(this.model.get('quantity')+1,20));
    },

    deleteButton: function() {
        this.remove();
    }

  });

})();


