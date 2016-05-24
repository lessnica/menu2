/*global Menu, Backbone, JST*/
/*Dish view render collection of dishes in 1 category*/
Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Dish = Backbone.View.extend({


    tagName:'div',
    className:'row categories',

    events: {},

    initialize: function (category) {

      this.collection = new Menu.Collections.Dish(category);
      this.listenTo(this.collection, 'reset',this.onFetch);
      this.render();
    },

    onFetch:function(){
      this.collection.each(function(element,index,array) {
        var view = new Menu.Views.DishItemView({model:element});
      });
    },

    render: function () {
      $('.right-block').append(this.$el);
    },

    onDelete:function() {

      this.collection.remove();
      Backbone.trigger('dishViewDelete');
      this.remove();
    },

    detailedDish: false


  });

})();
