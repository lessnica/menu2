/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.DishItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/dishitem.ejs'],

    tagName: 'div',

    id: '',

    className: 'col-xs-6 col-sm-4 col-md-3',

    events: {
      'click .dish':'dishDetail',
      'click .popup':'dishDetailHide'
    },

    initialize: function () {
      this.listenTo(Backbone,'dishViewDelete',this.onDelete);


      this.render();

    },

    render: function () {

      this.modelBinder = new Backbone.ModelBinder();
      this.$el.html(this.template());
      $('.categories').append(this.$el);
      var bindings = {
        img: {selector:'.image',
          elAttribute:'src'},
        name:[{selector:'.dishName'},
          {selector:'.image',
            elAttribute:'alt'}],
        description:'.dishDescription',
        price:'.price'
    };
      this.modelBinder.bind(this.model,this.el,bindings);

     //$('body').append(this.$el.html(this.template()).find('.image').attr('src',this.model.get('img')));
    },

    dishDetail: function() {
      this.$el.parent().find('.dish').addClass('halfopacity');
      this.$el.find('.popup').removeClass('hide');
    },

    dishDetailHide: function() {
      this.$el.parent().find('.dish').removeClass('halfopacity');
      this.$el.find('.popup').addClass('hide');
    },


    onDelete:function() {
      this.model.off();
      this.model.destroy();
      this.remove();
    }

  });

})();
