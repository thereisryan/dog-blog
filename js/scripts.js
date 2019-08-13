$(document).ready(function(){
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  })

  $("button#expandPhotos").click(function() {
    $("img").fadeIn().slideDown().toggle();
  })

});
/*
<script type="text/javascript">
    var x = confirm('Do you love dogs?');
    if(!x){
      window.location.href = "https://en.wikipedia.org/wiki/Cat";
    }
</script>
*/
