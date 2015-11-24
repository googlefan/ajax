$(function(){
  $("#greeting").html("Hello, world!");
  $("#greeting").click(function() {
    $.ajax({
      url: "/text.txt",
      confirmMsg: "Confirm?",
    })
  });
});