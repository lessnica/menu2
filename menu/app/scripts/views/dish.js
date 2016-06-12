/*global Menu, Backbone, JST*/
/*Dish view render collection of dishes in 1 category*/
Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.Dish = Backbone.View.extend({

    template: JST['app/scripts/templates/dish.ejs'],

    tagName:'div',
    className:'row categories grid',

    events: {},

    initialize: function (category) {

      this.collection = new Menu.Collections.Dish(category);
      this.listenTo(this.collection, 'reset',this.onFetch);
      this.listenTo(Backbone, 'filteredDish',this.filteredDish);
      this.render();
          },

    onFetch:function(){
      this.collection.each(function(element,index,array) {
        var view = new Menu.Views.DishItemView({model:element});
      });
    },

    render: function () {
      this.$el.append(this.template);
      $('.right-block').append(this.$el);
    },

    onDelete:function() {

      this.collection.remove();
      Backbone.trigger('dishViewDelete');
      this.remove();
    },

    detailedDish: false,

    filterFns: {
      // show if number is greater than 75
      numberGreaterThan75: function() {
        var number = $(this).find('.price').text();
        return parseInt( number, 10 ) > 75;
      }
    },

    filteredDish: function(event) {
      var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
          name: '.dishName',
          price: '.price',
          category: '[data-category]'
        }
      });

      var filterValue = $( event ).attr('data-filter');
      // use filterFn if matches value
      filterValue = this.filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
      Backbone.trigger('animationRelaunch');
    }


  });

})();
