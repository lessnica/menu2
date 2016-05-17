/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Basket = Backbone.View.extend({

    template: JST['app/scripts/templates/basket.ejs'],

    el: 'ul.basket',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.collection = new Menu.Collections.Basket(JSON.parse(localStorage.getItem('basketList')));
      Backbone.trigger('collectionBasketCreated', this.collection);
      //this.listenTo(Backbone, 'dishAdded', this.addItem);
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

    /*addItem : function(dishModel) {
      this.collection.add({
        dishId:dishModel.get('dishId'),
        name:dishModel.get('name'),
        quantity:1,
        price:dishModel.get('price')
      });
      this.view = new Menu.Views.BasketItemView({model: this.collection.at(this.collection.length - 1)});

    }*/

  });

})();
