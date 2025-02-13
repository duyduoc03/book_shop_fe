if($('#time_sale_all_product').length > 0) {
    var time_new = $('#time_sale_all_product').attr('nh-time-end');
    var countDownDateTimeSale = new Date(time_new).getTime();
    
    var x = setInterval(function() {
    	var now = new Date().getTime();
    
    	var distance = countDownDateTimeSale - now;
    
    	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    	
        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
    	document.getElementById("time_sale_all_product").innerHTML = "<p class=\"days\">" + days + " <span class=\"ml-1\">Ngày<\/span> <\/p> <p class=\"hour\">" + hours + "<\/p> <p class=\"minutes\">" + minutes + "<\/p> <p class=\"seconds\">" + seconds + "<\/p>";
    	
    	if (distance < 0) {
    	  clearInterval(x);
    	  document.getElementById("time_sale_all_product").innerHTML = "Thời gian khuyến mãi đã kết thúc";
    	}
    }, 1000);
}

//hover tab
$('#tabs-nav li:first-child a').addClass('active');
$('.menu_tab-content').hide();
$('.menu_tab-content:first').show();

$('#tabs-nav li').mouseenter(function() {
  $('#tabs-nav li a').removeClass('active');
  $(this).addClass('active');
  
  $('.menu_tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


// actice tab second
$(document).ready(function () {
    $('.tab_christmas .nav-link').on('click', function (e) {
        e.preventDefault();

        const targetTab = $(this).attr('href');

        $('.tab_christmas .nav-link').removeClass('active');
        $('.tab_christmas .tab-content .tab-pane').removeClass('active').removeClass('show');

        $(`.tab_christmas .nav-link[href="${targetTab}"]`).addClass('active');
        $(targetTab).addClass('active').addClass('show');
    });
    
    //
    $("#link_limit").change(function() {
        var url = $("#link_limit option:selected").val();
        if (url != '') {
            window.location.href = url;
        }
    });
});


