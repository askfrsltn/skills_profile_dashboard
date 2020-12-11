 $( document ).ready(function() {

    
    // -- INDEX PAGE SCRIPTS
    $(function(){
        // 2 functions to flip between landing page and understand page
        $("#menu-button").click(function(){
            $("#js-home-title").slideUp(500); 
            $("#js-card-menu").slideDown(1000);
        }); 
        $("#js-back-login").click(function(){
            $("#js-card-menu").slideUp(500);
            $("#js-home-title").slideDown(1000); 
        }); 
        // the function to return from the bottom of the understand page to landing page
        $("#js-back-login1").click(function(){ 
            $("#js-card-menu").slideUp(500);
            $("#js-home-title").slideDown(1000);
        }); 
    });

    // the function flips around the scorecard on logic page
        $(".scorecard-animation").click(function(){
        $(this).toggleClass("is-open");
        });
        
    // the function to get a score from scorecircle and set it to scorecard face-front with proper color
        $(".score-circle").click(function(){
            let scoreChoice= $(this).text();
            let color=$(this).css("background-color");
            let score = $(this).parent().parent().siblings().find(".scorcard-score");
            
            $(score).text(scoreChoice); 
            $(score).css("background-color",color)
            
        });
    
        $("#btn-login").click(function(){
            
            let login=$("#login").val();
            let loginName=$("#name").val();
            let loginEmail=$("#email").val();          
            let loginObject = {
                "login": login,
                "name": loginName,
                "email": loginEmail
            }

                localStorage.setItem('loginObject', JSON.stringify(loginObject));
        });
    // EXAMPLE. SCORE. THEORY. ELEMENT. slide down and up the card on click - works for each element card
        $(document).ready(function(){
            $(".scorecard-face-front-element").click(function(){
                $(this).slideUp();
                $(this).siblings().slideDown();
            });
            $(".scorecard-face-back-element").click(function(){
                $(this).slideUp();
                $(this).siblings().slideDown();
            });             
        });
    });