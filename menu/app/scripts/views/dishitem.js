/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.DishItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/dishitem.ejs'],

    tagName: 'div',

   className: 'col-xs-6 col-sm-4 col-md-3',

    events: {
      'click .dish':'dishDetail',
      'click .close':'dishDetailHide',
      'click .btn-add':'dishAdd'
    },

    initialize: function () {
      this.listenTo(Backbone,'dishViewDelete',this.onDelete);
      this.listenTo(Backbone,'popup',this.popupVar);


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
      if(this.switcher || $(event.target).hasClass('btn-add')) return;
      this.$el.parent().find('.dish').addClass('halfopacity');
      this.$el.find('.popup').removeClass('hide');
      Backbone.trigger('popup',1);
    },

    dishDetailHide: function() {
      this.$el.parent().find('.dish').removeClass('halfopacity');
      this.$el.find('.popup').addClass('hide');
      Backbone.trigger('popup',0);
    },

    popupVar:function(switcher){
      this.switcher = switcher;
    },

    dishAdd: function() {
      console.log(this.model.get('dishId'));
      Backbone.trigger('dishAdded', this.model.get('dishId'));
      this.dishDetailHide();
    },

    onDelete:function() {
      this.model.off();
      this.model.destroy();
      this.remove();
    }

  });

})();
