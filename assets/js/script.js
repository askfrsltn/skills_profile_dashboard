 $(document).ready(function(){
    // the code is built based on example from https://codepen.io/brianhaferkamp/pen/GRgEeVG?editors=0100
    $(function(){
        $("#menu-button").click(function(){
            $("#js-home-title").slideToggle(400); // Find element with the id 'js-home-titlee' and apply an additional class of 'is-open'
            $("#js-card-menu").slideToggle(400);
        }); 
    });
    
    // the code for openning the full page menu is built based on example from https://codepen.io/rveruna/pen/qmvZJw?editors=0010
    function openPage() {
        $('#js-understand-page').slideDown(500); // Find element with the id 'js-understand-page' and hide it
    }
    
    function closePage() {
        $('#js-understand-page').slideUp(500); // Find element with the id 'js-understand-page' and open it
    }
    
    $('#js-card-understand').click(function(){ 
        // When the element with the id 'js-card-understand' is clicked
        openPage(); // Run the openPage function
    });
    
    $('#back-button').click(function(){ // When the element with the id 'back-button' is clicked
    closePage(); // Run the closeMenu function
    });
    
    // the code is built based on example
    

});