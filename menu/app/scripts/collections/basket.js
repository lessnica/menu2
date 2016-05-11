/*global Menu, Backbone*/

Menu.Collections = Menu.Collections || {};

(function () {
  'use strict';

  Menu.Collections.Basket = Backbone.Collection.extend({

initialize:function(){
this.listenTo(this,'reset',this.localStorageSave);
this.on('remove',this.localStorageSave, this);
  this.on('change',this.localStorageSave, this);
  this.on('add',this.localStorageSave, this);
},

    model: Menu.Models.Basket,

    localStorageSave: function() {
      localStorage.setItem('basketList', JSON.stringify(this));
    }


  });

})();
