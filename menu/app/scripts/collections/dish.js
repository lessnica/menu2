/*global Menu, Backbone*/

Menu.Collections = Menu.Collections || {};

(function () {
  'use strict';

  Menu.Collections.Dish = Backbone.Collection.extend({

    model: Menu.Models.Dish,
    initialize:function(category){
       this.url = category+'.json';
      this.fetch({
        reset:true
      });
    }

  });

})();
