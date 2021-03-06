/*Basket item view renders and listen to 1 order item (<li>)*/

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
      this.listenTo(Backbone,'newOrder', this.deleteButton);
      this.render();
    },

    render: function () {

      this.modelBinder = new Backbone.ModelBinder();
      this.$el.html(this.template());
      $('.basket').append(this.$el);
      var bindings = {
        name: '.order-name',
        quantity: '.amount',
        totalPriceItem: '.price-basket-item'
      };
      this.modelBinder.bind(this.model, this.el, bindings);
    },

    minusButton: function() {
      this.model.set('quantity', Math.max(this.model.get('quantity')-1,1));
    },

    plusButton: function() {
      this.model.set('quantity', Math.min(this.model.get('quantity')+1,20));
    },

    deleteButton: function() {
      this.model.collection.remove(this.model.cid);
        this.remove();

    }

  });

})();


