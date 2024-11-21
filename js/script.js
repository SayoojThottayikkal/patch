$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
  });

  $("#faq .tab_head a").on("click", function () {
    var $this = $(this);
    $("#faq .tab_head a").removeClass("active");
    let clicked_tab = $this.data("id");
    $("#faq .tab_body div.item").removeClass("active");
    $(`#${clicked_tab}`).addClass("active");
  });
});
