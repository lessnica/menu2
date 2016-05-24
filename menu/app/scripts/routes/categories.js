/*global Menu, Backbone*/
/*Router switches different views*/
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
      if (!this.appView) this.appView = new  Menu.Views.App();
      if (this.view) {this.view.onDelete();}

      this.view = new Menu.Views.Categories();
      if (this.basketView) return;
      this.basketView = new  Menu.Views.Basket();

    },

    dishView:function(category){
      if (!this.appView) this.appView = new  Menu.Views.App();
      if (this.view) {this.view.onDelete();}
      this.view = new Menu.Views.Dish(category);
      if (this.basketView) return;
      this.basketView = new  Menu.Views.Basket();
    },

    dishViewNavigate: function(urltag,json) {
      this.navigate('category/'+urltag,{trigger:true});
      this.categoryJson = json;

    }


  });

})();
