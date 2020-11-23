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

        // -- SCORE PAGE SCRIPTS
            //SCORE. PAGES. the function to go from score summary to projects scoring page
                $(function(){
                
                    $("#projects-button").click(function(){
                        $("#js-scoresummary").slideUp(500); 
                        $("#js-projects").slideDown(1000);
                    }); 
                    $("#js-summary-button").click(function(){
                        $("#js-projects").slideUp(500);
                        $("#js-scoresummary").slideDown(1000); 
                    });              
                });
        //SCORE. PAGES.the function to go from score summary to THEORY projects scoring page
            $(function(){
            
                $("#theory-button").click(function(){ //click event
                    $("#js-scoresummary").slideUp(500); 
                    $("#js-theory").slideDown(1000);
                }); 
                $("#js-summary-button1").click(function(){//click event 
                    $("#js-theory").slideUp(500);
                    $("#js-scoresummary").slideDown(1000); 
                });             
            });

        //SCORE. PROJECT CARD. the function flips around the scorecard
            $(".scorecard-animation").click(function(){
                $(this).toggleClass("is-open");
            });

        //SCORE. PROJECT CARD. the function flips around the scorecard
            $(".scorecard-animation").click(function(){
                $(this).toggleClass("is-open");
            });
        // SCORE. CARD. the function to get a score from scorecircle and set it to scorecard face-front with proper color - TRAVERSING functionality for all the cards
            $(".score-circle").click(function(){
                let scoreChoice= $(this).text();
                let color=$(this).css("background-color");
                let score = $(this).parent().parent().siblings().find(".scorcard-score");
                $(score).text(scoreChoice); // score
                $(score).css("background-color",color) // color
                                
            });      
        
        // SCORE. CHART. the function to calculate projects score and scoring progress based on scorecards choices based on any scorecard click
            $(".scorecard-face-back").mouseleave(function (){
                const projectsNumber= 4; // number of cards in projeccts score calculation
                var ucfed = parseInt($("#projects-ucfed").text()) || 0; // turn the string into number from the card score
                var ifed = parseInt($("#projects-ifed").text()) || 0;
                var dcd = parseInt($("#projects-dcd").text()) || 0;
                var fsd = parseInt($("#projects-fsd").text()) || 0;
                var projectsScore= (ucfed+ifed+dcd+fsd)/4;       // calculate overal score    
                $("#projects-overall").text(projectsScore)/projectsNumber; // set the number to chart % on a summary section
                $("#projects-overall-summary").text(projectsScore)/projectsNumber;   // set the number to chart % on a summary section
                
                document.getElementById("progress-bar").setAttribute("stroke-dasharray", projectsScore+", 100" ); // set the score to the donut progress red bar on the chart section(svg object)
                document.getElementById("progress-bar1").setAttribute("stroke-dasharray", projectsScore+", 100" );// set the score to the donut progress red bar on the summary page chart (svg object)


                // SCORE. PROJECTS. PROGRESS. progress bar for projects calculation
                if(document.getElementById("projects-ucfed").innerText=="%"){
                    ucfedProgress = 0;
                } else {ucfedProgress = 1;};
                if(document.getElementById("projects-ifed").innerText=="%"){
                    ifedProgress = 0;
                } else {ifedProgress = 1;};
                if(document.getElementById("projects-dcd").innerText=="%"){
                    dcdProgress = 0;
                } else {dcdProgress = 1;};
                if(document.getElementById("projects-fsd").innerText=="%"){
                    fsdProgress = 0;
                } else {fsdProgress = 1;};
                var projectsScoringProgress=ucfedProgress+ifedProgress+dcdProgress+fsdProgress;
                
                // PROGRESS. progress number for projects on 2 projects summary pages
                $("#project-scoring-progress").text(projectsScoringProgress);
                $("#project-scoring-progress1").text(projectsScoringProgress);
                
                // PROGRESS. vertical progress bar for projects on 2 summary section and page
                $(".projects-progress-bar").css("width", projectsScoringProgress/projectsNumber*100+"%");

             });

        // SCORE. THEORY. MODULE. open list of element for the module
            $(".scorecard-animation-module").click(function(){
                $(this).siblings().children().slideToggle(700);
                $(this).parents().siblings().children().find(".scorecard-element").slideUp(700);// close previously open list of element for other modules
                
            });

        // SCORE. THEORY. MODULE. ELEMENTS. slide down and up of the card on click - all the element cards
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
        /*-- Ceate an object for scorecards upon login based on logic from: https://stackoverflow.com/questions/48996441/javascript-iterate-over-form-inputs-and-collect-values-as-key-value-pairs-in-o
        $(".scorecard-module").click(function(){
            let scoreCards = this.querySelectorAll('.scorcard-score');
            let moduleObject = {};
            for (let i = 0; i < scoreCards.length; i++) {
                moduleObject[scoreCards[i].id] = scoreCards[i].value;
                }
                console.log(moduleObject);
        });
    --*/
    /*--   
    // the code is built based on example from https://codepen.io/brianhaferkamp/pen/GRgEeVG?editors=0100
    $(function(){
        $("#menu-button").click(function(){
            $("#js-home-title").slideToggle(400); // Find element with the id 'js-home-title' and apply an additional class of 'is-open'
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
    
--*/

});