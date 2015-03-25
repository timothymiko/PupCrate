$(function() {
    function unifyHeights() {    
        var maxHeight = 0;    
        $('div.row').children('.col').each(function(){      
            var height = $(this).height();      
            if ( height > maxHeight ) { maxHeight = height; }    
        });    
        $('.how-it-works-card').css('height', maxHeight * 0.8); 
    }
    unifyHeights();
});

$(document).ready(function () {
    var $document = $(document);
    
    var form = document.getElementById('contact-form'); // form has to have ID: <form id="formID">
    form.noValidate = true;
    form.addEventListener('submit', function(event) { // listen for form submitting
            if (!event.target.checkValidity()) {
                event.preventDefault(); // dismiss the default functionality
                alert('Please, fill in all fields for the contact form.'); // error message
            }
        }, false);
});