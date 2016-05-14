/*global Menu, Backbone*/

Menu.Collections = Menu.Collections || {};

(function () {
  'use strict';

  Menu.Collections.Basket = Backbone.Collection.extend({

initialize:function(){
  this.listenTo(Backbone, 'dishAdded', this.addItem);
  this.on('remove',this.localStorageSave, this);
  this.on('change',this.localStorageSave, this);
  this.on('add',this.localStorageSave, this);
},

    model: Menu.Models.Basket,

    localStorageSave: function() {
      localStorage.setItem('basketList', JSON.stringify(this));
    },

    addItem: function(dishModel) {
      var basketItemTwin = this.where({dishId: dishModel.get('dishId')});
      if (basketItemTwin.length === 0 ) {
        this.add({
          dishId:dishModel.get('dishId'),
          name:dishModel.get('name'),
          quantity:1,
          price:dishModel.get('price')
        });
      } else {
        basketItemTwin[0].set('quantity', Math.min(20, basketItemTwin[0].get('quantity') + 1));
      }
    }
  });

})();
