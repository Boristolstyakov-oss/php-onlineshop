$(document).ready(function(){
  $("#menu1").hover(function(){
    $("#submenu1").slideToggle("fast");
  });
  $("#menu2").hover(function(){
    $("#submenu2").slideToggle("fast");
  });
  $("#menu3").hover(function(){
    $("#submenu3").slideToggle("fast");
  });
  $("#loginmenu").hover(function(){
    $("#loginsubmenu").slideToggle("fast");
  });
  $("#registermenu").hover(function(){
    $("#registersubmenu").slideToggle("fast");
  });
});
