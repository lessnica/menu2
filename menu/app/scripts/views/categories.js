/*global Menu, Backbone, JST*/
/* Categories view renders all collection of categories*/
Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Categories = Backbone.View.extend({
    tagName:'div',
    className:'row categories',

    events: {},

    initialize: function () {

      this.collections = new Menu.Collections.Categories();
      this.listenTo(this.collections, 'reset', this.onFetch);
      this.render();

    },

    actualCategories: {},

    onFetch: function() {
      this.collections.each(function(element, index, array){
      var view = new Menu.Views.CategoryItemView({model:element});
      },this);
    },

    render: function () {
      $('.right-block').append(this.$el);
    },

    onDelete:function() {

      this.collections.remove();
      Backbone.trigger('viewDelete');
      this.remove();
    }

  });

})();
