/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Categories = Backbone.View.extend({
    el:'.categories',

    template: JST['app/scripts/templates/categories.ejs'],

    events: {},

    initialize: function () {

      this.collections = new Menu.Collections.Categories();
      this.request(this.actualCategories);

      /*this.listenTo(this.model, 'change', this.render);*/
    },

    actualCategories: {},

    request: function(actualCategories) {

     var xhr = new XMLHttpRequest();
      xhr.open('GET','/categories.json',true);
      xhr.onreadystatechange = function () {
       if (xhr.readyState ===4){
         if (xhr.status === 200) {
           actualCategories = JSON.parse(xhr.responseText);
           console.log(actualCategories);
           console.log('ready');
         }
       }
      }
      xhr.send();
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
