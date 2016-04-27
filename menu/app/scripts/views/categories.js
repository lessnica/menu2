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
      this.actualCategories = this.request();
      console.log(this.actualCategories);

      /*this.listenTo(this.model, 'change', this.render);*/
    },

    actualCategories: {},

    request: function() {
      var reqArray;
      var request = $.ajax({
        method:'GET',
        url:'/categories.json',
        dataType:'json',
        async:false,
        error: function(xhr,status,error) {
        reqArray = {};
        },

      }).done(function(data,status,xhr) {
         reqArray = data;
      });
      return reqArray;
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
