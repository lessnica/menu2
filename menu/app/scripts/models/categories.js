/*global Menu, Backbone*/
/*Categories model responsible for 1 category of products*/

Menu.Models = Menu.Models || {};

(function () {
  'use strict';

  Menu.Models.Categories = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
      img:'',
      name:'Unknown'
      //file: 'unknown.json'
    }
  });

})();
