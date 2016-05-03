/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Dish = Backbone.View.extend({

    template: JST['app/scripts/templates/dish.ejs'],

    tagName:'div',
    className:'row categories',

    events: {},

    initialize: function (category) {

      //this.listenTo(this.model, 'change', this.render);
      this.collection = new Menu.Collections.Dish(category);
      this.listenTo(this.collection, 'reset',this.onFetch);
this.render();
    },

    onFetch:function(){
      this.collection.each(function(element,index,array) {
        //console.log('dishviewcreated',element);
        var view = new Menu.Views.DishItemView({model:element});
      });
    },

    render: function () {
      $('.right-block').append(this.$el);
      //this.$el.html(this.template(this.model.toJSON()));
    },

    onDelete:function() {

      this.collection.remove();
      Backbone.trigger('dishViewDelete');
      this.remove(); // this.$el.remove();
    },

    detailedDish: false


  });

})();
