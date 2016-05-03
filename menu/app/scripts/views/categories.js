/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Categories = Backbone.View.extend({
    //el:'.categories',
    tagName:'div',
    className:'row categories',

    template: JST['app/scripts/templates/categories.ejs'],

    events: {},

    initialize: function () {

      this.collections = new Menu.Collections.Categories();
      this.listenTo(this.collections, 'reset', this.onFetch)
      console.log(this.actualCategories);
      this.render();

      /*this.listenTo(this.model, 'change', this.render);*/
    },

    actualCategories: {},

    onFetch: function() {
      console.log(this.collections);
      this.collections.each(function(element, index, array){
        console.log('createviewstart',element);
      var view = new Menu.Views.CategoryItemView({model:element});
      },this);
    },

    render: function () {
      $('.right-block').append(this.$el);
      //this.$el.html(this.template(this.model.toJSON()));
    },

    onDelete:function() {

      this.collections.remove();
      Backbone.trigger('viewDelete');
      this.remove(); // this.$el.remove();
    }

  });

})();
