$(function(){

 var header = document.getElementById('header');
 var headroom = new Headroom(header);
 headroom.init();
 
 var ancho = $(window).width(),
  enlaces = $('#enlaces'),
  btnMenu = $('#btn-menu'),
  icono = $('#btn-menu .icono');

  if(ancho < 769){
    enlaces.hide();
  }

  btnMenu.on('click', function(e){
   enlaces.slideToggle();
   icono.toggleClass('fa-times', 'fa-bars');
  });

  $(window).on('resize', function(){
    if($(this).width() > 769){
      enlaces.show();
      icono.addClass('fa-times');
      icono.removeClass('fa-bars');
    } else {
      enlaces.hide();
      icono.addClass('fa-bars');
      icono.removeClass('fa-times');
    }
   });


});﻿