$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(){
        $navbar.toggleClass("toggle-left");
        setTimeout(function() {
			$("#header").removeClass('toggle-left');
		}, 2000);
    })

});
function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: '-400px'});
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed' , {
    strings: [
        'A company you can rely upon',
    ],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
        'Cleaning products',
        'Industrial chemicals'
    ],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
$(function() {
    $('.product_sec').matchHeight();
});
function mail_send(id) {
    if(id==1){
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        if(name != "" && email != "" && phone != "" && message != ""){
        $.ajax({
            type: 'post',
            url: 'mail_ajax.php',
            data: $('form').serialize(),
            success: function (response) {
                $( '#form1' ).each(function(){
                        this.reset();
                    });
                alert('Your Message sent successfully. Thank you!');
                return;
            }
        });
        }
    }else{
        var name = $('#name1').val();
        var email = $('#email1').val();
        var phone = $('#phone1').val();
        var message = $('#message1').val();
        if(name != "" && email != "" && phone != "" && message != ""){
        $.ajax({
            type: 'post',
            url: 'mail_ajax.php',
            data: $('#form2').serialize(),
            success: function (response) {
                $( '#form2' ).each(function(){
                        this.reset();
                    });
                alert('Your message sent successfully. Thanks for contacting us.');
                return;
            }
        });
        }
    }
    
}
$("form").submit(function(e) {
    e.preventDefault();
});
