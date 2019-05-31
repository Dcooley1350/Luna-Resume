$(document).ready(function() {
  $("button#Dark-Background").click(function() {
    $("body").removeClass();
    $("body").addClass("Dark-Background");
  });
  $("button#Light-Background").click(function() {
    $("body").removeClass();
    $("body").addClass("Light-Background");
  });
});