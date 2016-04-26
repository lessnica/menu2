/*global menu, $*/


window.Menu = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    console.log('Hello from Backbone!');
    var view = new Menu.Views.Categories();
  }
};

$(document).ready(function () {
  'use strict';
  Menu.init();
});
