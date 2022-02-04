$(function() {
    var words = [
        'un designer',
        'en bachelor informatique',
        'chez la need for school',
    ],
    i = 0;

    $(".navbar-responsive").toggle();

    $(".menu").click(function (){
        $(".navbar-responsive").toggle("slow");


    });
    setInterval(function (){
    $("#word").fadeOut(function (){
        $(this).html(words[i = (i + 1) % words.length]).fadeIn(1500);
    })
    }, 3500,)

//    Scroll vers section site
    $(".scroll").click(function (){
        var section = $("." + this.id)
        $("html,body").animate({scrollTop: section.offset().top}, 'slow');
    });

    // progress bar
    window.sr = ScrollReveal();
    sr.reveal('.progress-bar',{
        origin: 'left',
        duration: 2500,
        distance: '100%',
        reset:true,
        delay:375
    });
    sr.reveal('.percent',{
        origin: 'top',
        duration: 2500,
        distance: '100%',
        reset:true,

    });
    sr.reveal('article',{
        origin: 'bottom',
        duration: 2000,
        distance: '100%',

    });
    sr.reveal('.catchphrase',{
        origin: 'top',
        duration: 2500,
        distance: '500%',
        delay: 500

    });
    sr.reveal('.down-arrow',{
        origin: 'bottom',
        duration: 2500,
        distance: '1000%',
        delay: 700

    });


});





