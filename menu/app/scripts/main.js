/*global menu, $*/


window.Menu = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    console.log('Hello from Backbone!');
    var router = new Menu.Routers.Categories();
    Backbone.history.start();
  }
};

$(document).ready(function () {
  'use strict';
  Menu.init();
});
