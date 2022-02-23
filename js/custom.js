jQuery(($) => {
    $('.select-language').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select-language').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select-language').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

$('.arrow-down').on('click', function() {
    $(this).toggleClass('active');
});

// Navbar

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-nav") {
        x.className += " responsive";
    } else {
        x.className = "header-nav";
    }
}

// Tab block

function openTabBlockOverview(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-block-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-block-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function openTabBlock(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-block-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-block-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenArticle").click();


// Owl carousel 

$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      nav: true,
      dots: false,
      onInitialized: slideInit
    });
    
    function slideInit(e){
        // определяем количество клонировнных слайдов при инициализации
        owl.prevCloned = e.item.index;
    }
    
    owl.on('change.owl.carousel', function(e) {
        var curPos = e.property.value - owl.prevCloned + 1;
            curPos = curPos > 0 ? curPos : e.item.count;
        $('.slideCounter').html('<span class="slide-current-number"><strong>'+curPos+'</strong></span>/<span>'+e.item.count+'</span>' );
    })
});

