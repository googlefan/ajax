$(function(){
  $gdiv = $("#greeting");
  $gdiv.html("Hello, world!");
  $gdiv.click(function() {
  txt = $.ajax({
      url: "/text.txt",
      async: false
    });
  $gdiv.html(txt);
  });
});