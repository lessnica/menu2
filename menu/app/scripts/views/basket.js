/*global Menu, Backbone, JST*/
/*Basket view stores collection of order items*/
Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Basket = Backbone.View.extend({

    el: 'ul.basket',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.collection = new Menu.Collections.Basket(JSON.parse(localStorage.getItem('basketList')));
      Backbone.trigger('collectionBasketCreated', this.collection);
        this.render();
      this.listenTo(this.collection, 'add', this.addItemView);
    },

    render: function () {
      this.collection.each(function(item) {
        this.view = new Menu.Views.BasketItemView({model:item});
      },this);
    },

    addItemView: function () {
      this.view = new Menu.Views.BasketItemView({model: this.collection.at(this.collection.length - 1)});
    }


  });

})();
