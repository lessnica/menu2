/*global Menu, Backbone*/

Menu.Routers = Menu.Routers || {};

(function () {
  'use strict';

  Menu.Routers.Categories = Backbone.Router.extend({
    initialize:function() {
      this.listenTo(Backbone,'categoryClicked',this.dishViewNavigate);
    },

    routes: {
      'category/:category':'dishView',
      '':'menuDefault'
    },

    menuDefault: function() {
      if (this.view) {this.view.onDelete();}

      this.view = new Menu.Views.Categories();

    },

    dishView:function(category){
      if (this.view) {this.view.onDelete();}

      this.view = new Menu.Views.Dish(category);
    },

    dishViewNavigate: function(urltag,json) {
      this.navigate('category/'+urltag,{trigger:true});
      this.categoryJson = json;

    }


  });

})();
