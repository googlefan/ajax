$(function(){
  $gdiv = $("#greeting");
  $gdiv.html("Hello, world!");
  $gdiv.click(function() {
  txt = $.ajax({
      url: "/test.txt",
      async: false
    });
  $gdiv.html(txt);
  });
});