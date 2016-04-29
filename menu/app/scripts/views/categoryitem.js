/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.CategoryItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/categoryitem.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function (mod) {
      this.model = mod;
      this.render();
     // this.listenTo(this.model, 'change', this.render);
    },

    render: function () {

      this.modelBinder = new Backbone.ModelBinder();
      this.$el.html(this.template());
      $('body').append(this.$el);
      var bindings = {
        img: {selector:'.image',
          elAttribute:'src'},
        name:'.categoryName'
      };
      this.modelBinder.bind(this.model,this.el,bindings);

     //$('body').append(this.$el.html(this.template()).find('.image').attr('src',this.model.get('img')));
    }

  });

})();
