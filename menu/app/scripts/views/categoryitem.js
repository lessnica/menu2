/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.CategoryItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/categoryitem.ejs'],

    tagName: 'div',

   className: 'col-xs-6 col-sm-4 col-md-3',

    events: {
      'click':'onCategory'
    },

    initialize: function () {
      console.log('kkkkkkkk');
      this.listenTo(Backbone,'viewDelete',this.onDelete);


      this.render();

    },

    render: function () {

      this.modelBinder = new Backbone.ModelBinder();
      this.$el.html(this.template());
      $('.categories').append(this.$el);
      var bindings = {
        img: {selector:'.image',
          elAttribute:'src'},
        name:[{selector:'.categoryName'},
          {selector:'.image',
            elAttribute:'alt'}]
      };
      this.modelBinder.bind(this.model,this.el,bindings);

     //$('body').append(this.$el.html(this.template()).find('.image').attr('src',this.model.get('img')));
    },

    onCategory: function() {
      console.log('clicked');
      Backbone.trigger('categoryClicked', this.model.get('name'), this.model.get('json'));

    },

    onDelete:function() {
      this.model.off();
      this.model.destroy();
      this.remove();
    }

  });

})();
