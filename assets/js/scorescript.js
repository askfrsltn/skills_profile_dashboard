$( document ).ready(function() {
    
        
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
                $(score).css("background-color",color);
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
    
    // LOCALSTORAGE MANIPULATION

    // Create 3 objects upon login to add to individual object: scores, progress, progress-bars  (logic from: https://stackoverflow.com/questions/48996441/javascript-iterate-over-form-inputs-and-collect-values-as-key-value-pairs-in-o)
    $(document).ready(function(){
        // Create object for scores
        let ids = document.querySelectorAll('.scorcard-score')
        let scoresObject = {}
        for (let i = 0; i < ids.length; i++) {
        scoresObject[ids[i].id] = null;
        }
        
        // Create object for progress bar
        let progressBar = document.querySelectorAll('.projects-progress-bar')
        let progressBarObject = {}
        for (let i = 0; i < progressBar.length; i++) {
        progressBarObject[progressBar[i].id] = null;
        }
        
        // Create object for progress            
        let progressNumber = document.querySelectorAll('.progress-number')
        let progressObject = {}
        for (let i = 0; i < progressNumber.length; i++) {
        progressObject[progressNumber[i].id] = null;
        }
        
        // add objects to the object in localStorage
        
        userObject=JSON.parse(localStorage.getItem("userObject")) // parse from LocalStorage
        userObject.scores=scoresObject; // add scores dataset to object            
        userObject.progressBar=progressBarObject; // add progressBar dataset to object            
        userObject.progress=progressObject; // add progress dataset to object            
        localStorage.setItem('userObject', JSON.stringify(userObject)); // store updated data in local storage   
        
        console.log(userObject);
    });
    
    // LOCAL STORAGE. REPLACE key-value pair with chosen score from scorecard
        $(".score-circle").click(function(){
            let value= $(this).text().trim().slice(0,-1);
            let key=$(this).parent().parent().siblings().find(".scorcard-score").attr("id");// find card id
                userObject=JSON.parse(localStorage.getItem("userObject"));// retrieve object from local storage
                userObject.scores[key]=value;//change value of scored id
                localStorage.setItem("userObject", JSON.stringify(userObject));//return object into LocalStorage with updated value                   
        });
    

});