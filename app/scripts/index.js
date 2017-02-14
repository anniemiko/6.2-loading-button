var $ = require('jquery');
var CharCollection = require('../scripts/models/characters.js').CharCollection;
var charNames = require('../templates/char-names.hbs');

var character = new CharCollection();

var button = $('.load-button');


button.on('click', function(){
    character.fetch();

    character.on('request', function(){
      $('.load-button').text('Loading');
    });
    character.on('sync', function(char){
      character.forEach(function(char){
        char.get('name');
        $('.load-button').text('Submit');
      })
      $('.character-list').append(charNames(char));
    });

});

// character.fetch();
