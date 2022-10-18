$(".ratingbtn").on("mouseenter", function(e) {
  $(this).addClass("jshover");
  $(this).removeClass("btn-outline-secondary");
}).on("click", function(e) {
  $(this).addClass("btn-secondary");
  var event1 = this.innerText;
  $(".submit").on("click", function(e) {
    $(".container").css("display", "none");
    $(".thankYou span").text(event1);
    $(".thankYou").css("display", "flex");
  })
}).on("mouseleave", function() {
  $(this).removeClass("jshover");
  $(this).addClass("btn-outline-secondary")
});
