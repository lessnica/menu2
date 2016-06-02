/*global menu, $*/


window.Menu = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    var router = new Menu.Routers.Categories();
    Backbone.history.start({pushState: true, root: ""});
  }
};

$(document).ready(function () {
  'use strict';
  Menu.init();
});
