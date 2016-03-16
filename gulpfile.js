var gulp = require('gulp'),
    elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.scripts(['./src/*.js'], './dist/jquery.checkboxvalue.min.js');
});