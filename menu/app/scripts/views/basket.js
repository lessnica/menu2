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
      this.collection = new Menu.Collections.Basket();
      this.listenTo(Backbone, 'dishAdded', this.addItem);
      //this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      //this.$el.html(this.template(this.model.toJSON()));
    },

    addItem : function(dishModel) {
      this.collection.add({
        dishId:dishModel.get('dishId'),
        name:dishModel.get('name'),
        quantity:1,
        price:dishModel.get('price')
      });
      this.view = new Menu.Views.BasketItemView({model: this.collection.at(this.collection.length - 1)});
    }

  });

})();
