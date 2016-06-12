/*global Menu, Backbone, JST*/
/*renders view and popup for 1 dish*/
Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.DishItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/dishitem.ejs'],

    tagName: 'div',

   className: 'col-xs-6 col-sm-4 col-md-3 element-item',

    events: {
      'click .dish':'dishDetail',
      'click .close':'dishDetailHide',
      'click .btn-add':'dishAdd',
      'animationend .dish': 'deleteAnimation'
    },

    initialize: function () {

      this.listenTo(Backbone,'dishViewDelete',this.onDelete);
      this.listenTo(Backbone,'animationRelaunch',this.animationStart);
      this.listenTo(Backbone,'popup',this.popupVar);
      this.$el.attr('data-category','');
      this.render();

    },

    render: function () {

      this.modelBinder = new Backbone.ModelBinder();
      this.$el.html(this.template());
      $('.dish-container').append(this.$el);
      var bindings = {
        img: {
          selector: '.image',
          elAttribute: 'data-original'
        },
        dataCategory: [{
          selector: '',
          elAttribute: 'data-category'
        },{
      selector: '',
      elAttribute: 'class'

          }],
        name: [{selector: '.dishName'},
          {
            selector: '.image',
            elAttribute: 'alt'
          }],
        description: '.dishDescription',
        price: '.price'
      };

      this.modelBinder.bind(this.model, this.el, bindings);
      this.$el.find('.lazy').lazyload({
          threshold: 0,
          failure_limit: 0,
          event: "scroll",
          effect: "show",
          container: window,
          data_attribute: "original",
          skip_invisible: false,
          appear: function (ele, settings) {
            $(ele).attr("src", $(ele).attr("data-original"));
            this.animationStart();
          }.bind(this),
          load: null,
          placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"

        }
      );
    },



    animationStart:function() {
      if (!this.$el.find('.dish').hasClass('animated-cart')&&this.switcher!==1) {
        console.log(this.switcher);
        this.$el.find('.dish').addClass('animated-cart');
      }

     },

    deleteAnimation:function(){
      this.$el.find('.dish').removeClass('animated-cart');
    },

    dishDetail: function(event) {
      if(this.switcher || $(event.target).hasClass('btn-add')) return;
      this.$el.parent().find('.dish').addClass('halfopacity');
      this.$el.find('.popup').removeClass('hide');
      this.$el.find('.popup').addClass('animated-cart');
      Backbone.trigger('popup',1);
      $('body').trigger('scroll');
    },

    dishDetailHide: function() {
      this.$el.parent().find('.dish').removeClass('halfopacity');
      this.$el.find('.popup').removeClass('animated-cart');
      this.$el.find('.popup').addClass('hide');
      Backbone.trigger('popup',0);
    },

    popupVar:function(switcher){
      this.switcher = switcher;
    },

    dishAdd: function(event) {
      if(this.switcher && !$(event.target).parent().parent().hasClass('popup')) return;
      Backbone.trigger('dishAdded', this.model);
      this.dishDetailHide();
    },

    onDelete:function() {
      this.model.off();
      this.model.destroy();
      this.remove();
    }

  });

})();
