/*global Menu, Backbone, JST*/

Menu.Views = Menu.Views || {};

(function () {
  'use strict';

  Menu.Views.App = Backbone.View.extend({

    template: JST['app/scripts/templates/app.ejs'],

    el: 'main',

    id: '',

    className: '',

    events: {
      'click .btn-danger':'newOrder',
      'click .btn-order-confirm': 'confirmOrder'
    },

    initialize: function () {

    },

    render: function () {

    },

    newOrder: function() {
      Backbone.trigger('newOrder');
    },

    confirmOrder: function() {
      Backbone.trigger('confirmOrder');
    }



  });

})();
