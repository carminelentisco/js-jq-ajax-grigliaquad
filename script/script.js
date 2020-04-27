jQuery(document).ready(function($) {
    var box = $('.box');
    box.on('click', function() {
       var selectBox = $(this);
        if ( selectBox.hasClass('active') == false) {
            $.ajax({
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                data: "GET",
                success: function (data) {
                    var number = data.response;
                    if (number <= 5) {
                        selectBox.css("background","yellow").text(number);
                        selectBox.addClass('active');
                    } else if (number > 5) {
                        selectBox.css("background","green").text(number);
                        selectBox.addClass('active');
                    }
                },
                error: function () {
                    console.log('Errore');
                }  
            });
        } else {
            alert('Casella gia selezionata');
        }
    } );
});