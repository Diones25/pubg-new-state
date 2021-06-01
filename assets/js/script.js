/*Script para adicionar background-color no header ao rolar a página 
para baixo 'scrool'*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.header').css("background-color", "#051e2d")
    } else {
        $('.header').css("background-color", "transparent")
    }
});

/*Script para menu ativo*/
$(function(){

    var links = $("#menu a");
    $(window).scroll(function(){
        var topScroll = $(window).scrollTop();
        links.each(function(){
            var href = $(this).attr('href');
            var el = $(href);
            var posSection = el.offset().top;
            var hSection   = el.height();

            if(posSection <= topScroll && (posSection + hSection) > topScroll ){
                links.removeClass('active');
                $(this).addClass('active');
            }
            else{
                $(this).removeClass('active');
            }
        });
    });
});

function menuMobile() {
    var x = document.getElementById("mobile");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

/*Script Modal*/
function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
/*Fim script Modal*/
