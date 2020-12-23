 // LOCALSTORAGE 

    // Create userObject object upon login to add to individual object: scores, progress, progress-bars  (logic from: https://stackoverflow.com/questions/48996441/javascript-iterate-over-form-inputs-and-collect-values-as-key-value-pairs-in-o)
    $(document).ready(function(){
            let userObject={}
            // 1. Create object for scores
            let ids = document.querySelectorAll('.scorcard-score')
            let scoresObject = {}
            for (let i = 0; i < ids.length; i++) {
            scoresObject[ids[i].id] = 0;
            }
            

            // 2. Create object for progress bar
            let progressBar = document.querySelectorAll('.progress-bar')
            let progressBarObject = {}
            for (let i = 0; i < progressBar.length; i++) {
            progressBarObject[progressBar[i].id] = 0;
            }
            
            // 3. Create object for progress            
            let progressNumber = document.querySelectorAll('.progress-number')
            let progressObject = {}
            for (let i = 0; i < progressNumber.length; i++) {
            progressObject[progressNumber[i].id] = 0;
            }
            
            //4. create object for Donut chart numbers test: console.log(progressObject);
            let donutProgressNumbers = document.querySelectorAll('.score-identifier');
            let donutProgressNumbersObject={}
            for (let i = 0; i < donutProgressNumbers.length; i++) {
            donutProgressNumbersObject[donutProgressNumbers[i].id] = 0;
            }

            //5. create object for Donut chart progress bar
            let donutProgressBar = document.querySelectorAll('.circle-incomplete');
            let donutProgressBarObject={}
            for (let i = 0; i < donutProgressBar.length; i++) {
            donutProgressBarObject[donutProgressBar[i].id] = 0;
            }
        
            // add objects to the userObject in localStorage
            
            userObject.scores=scoresObject; // add scores dataset to object            
            userObject.progressBar=progressBarObject; // add progressBar dataset to object            
            userObject.progress=progressObject; // add progress dataset to object       
            userObject.donutProgressNumbers=donutProgressNumbersObject; //add progress numbers for donut charts into local storage data object
            userObject.donutProgressBar=donutProgressBarObject; 
            
            localStorage.setItem('userObject', JSON.stringify(userObject)); // store updated data in local storage test: console.log(userObject);

    });
      
$(document).ready(function() {
            
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

    //SCORE. PAGES. hide summary section, open  THEORY projects scoring page
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

    //SCORE. PROJECT CARD. the function flips the project scorecard around
        $(".scorecard-animation").click(function(){
            $(this).toggleClass("is-open");
        });
            
    // SCORE. CARD. GENERAL. 2 functions to get a score from scorecircle and set it to scorecard face-front with proper color - TRAVERSING functionality for all the cards. works for the cards on theory sections
        $(".score-circle").click(function(){
            let scoreChoice= $(this).text();
            let color=$(this).css("background-color");
            let score = $(this).parent().parent().siblings().find(".scorcard-score");
            $(score).text(scoreChoice); // score
            $(score).css("background-color",color) // color                  
        }); 

        // same for projects section
        $(".projects-score-circle").click(function(){
            let scoreChoice= $(this).text();
            let color=$(this).css("background-color");
            let score = $(this).parent().parent().siblings().find(".scorcard-score");
            $(score).text(scoreChoice); // score
            $(score).css("background-color",color) // color                      
        });      

    // SCORE. THEORY. MODULE. open list of element for the module when clicked
        $(".scorecard-animation-module").click(function(){
            $(this).siblings().children().slideToggle(200);
            $(this).parents().siblings().children().find(".scorecard-element").slideUp(200);// close previously open list of element for other modules
            
        });

    // SCORE. THEORY. MODULE. ELEMENTS. slide down and up the card on click - works for each element card
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
    
    // SCORE. PROJECTS. CHART. calculate projects score and scoring progress inputs based on scorecards choices triggered project scorecard click
        
    $(".projects-score-circle").click(function (){
                     
            const projectsNumber= 4; // number of cards in projects score calculation
            
            let ucfed = parseInt($("#projects-ucfed").text()) || 0; // turn the string into number from the card score or 0
            let ifed = parseInt($("#projects-ifed").text()) || 0;
            let dcd = parseInt($("#projects-dcd").text()) || 0;
            let fsd = parseInt($("#projects-fsd").text()) || 0;
            
            let projectsScore= (ucfed+ifed+dcd+fsd)/projectsNumber;       // calculate overal score    
            $("#projects-overall").text(projectsScore); // set the number to chart % on a summary section
            $("#projects-overall-summary").text(projectsScore);   // set the number to chart % on a summary section
            
            document.getElementById("progress-bar").setAttribute("stroke-dasharray", projectsScore+", 100" ); // set the score to the donut progress RED CIRCLE BAR on the chart section(SVG OBJECT). (JQuery attr() doesn't work)
            
            document.getElementById("progress-bar1").setAttribute("stroke-dasharray", projectsScore+", 100" );// set the score to the donut progress RED CIRCLE BAR on the SUMMARY page chart (svg object) (JQuery attr() doesn't work)


        // SCORE. PROJECTS. PROGRESS. progress bar for projects calculation - can be replaced by interesteing array formula ==> map(/\d+/g etc)...
            if(document.getElementById("projects-ucfed").innerText=="%"){
                ucfedProgress = 0; // 
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
            let projectsScoringProgress=ucfedProgress+ifedProgress+dcdProgress+fsdProgress;
                
        // PROGRESS. progress NUMBER for projects on 2 projects summary pages
            $("#project-scoring-progress").text(projectsScoringProgress);
            $("#project-scoring-progress1").text(projectsScoringProgress);
            let projectsScoringProgressWidth = projectsScoringProgress/projectsNumber*100;
        
            // PROGRESS. vertical progress BAR for projects on 2 summary section and page
            $(".projects-progress-bar").css("width", projectsScoringProgressWidth+"%");
            let userObject=0;
            //retrieve data from localStorage
            userObject=JSON.parse(localStorage.getItem("userObject"));
            
            // store individual scores variables into userObject
            userObject.scores["projects-ucfed"]=ucfed;
            userObject.scores["projects-ifed"]=ifed;
            userObject.scores["projects-dcd"]=dcd;
            userObject.scores["projects-fsd"]=fsd;
            
            // store calculated scores into userObject
            userObject.donutProgressNumbers["projects-overall"]=projectsScore;
            userObject.donutProgressNumbers["projects-overall-summary"]=projectsScore;
            userObject.donutProgressBar["progress-bar"]=projectsScore;
            userObject.donutProgressBar["progress-bar1"]=projectsScore;
            
            // store projects scoring progress for vertical bar
            userObject.progressBar["project-scoring-progress-bar"]=projectsScoringProgressWidth;
            userObject.progressBar["project-scoring-progress-bar1"]=projectsScoringProgressWidth;
            userObject.progress["project-scoring-progress"]=projectsScoringProgress;
            userObject.progress["project-scoring-progress1"]=projectsScoringProgress;

            // store updated userObject into localStorage
            localStorage.setItem("userObject", JSON.stringify(userObject));

        });
    
        
    // SCORE.THEORY. VISUALS. Calculate module score visualisation functions. 
        $(".score-circle").click(function(){
            //1. find a module key id
            let moduleObjectKey = $(this).parent().parent().parent().parent().parent().siblings().children().find('.scorcard-score').attr("id");
            let moduleKey="#"+moduleObjectKey;
            
            // 2. get the scores of the elements from all the module elements           
            let values = $(this).parent().parent().parent().parent().parent().parent().find('.elements-section').find('.scorcard-score').text();// return all the values within the module
            let value= $(this).text().trim().slice(0,-1);// get rid of spaces and % sign at the end

            //3. turn the string into numbers array - crazy code from https://stackoverflow.com/questions/18712347/how-to-get-numeric-value-from-string - who can ever come up with this logic???          
            let valuesArray = values.match(/\d+/g).map(Number); 
            
            //4. Calculate average in the array
            let moduleSum = 0 // create elements cum number variable
            let scoredElements = valuesArray.length; // create variable to calculate number of elements scored
            let totalNumberOfElements=$(this).parent().parent().parent().parent().parent().parent().find('.elements-section').find('.scorcard-score').length; // calculates total number of elements;
            
            // 5. calculate sum of scores in the array
            for (let i = 0; i < valuesArray.length; i++) {
                moduleSum += parseInt(valuesArray[i]); 
            }

            //6. Assign average to module score circle on the module scorecard
            let moduleAverageScore = parseInt(moduleSum/totalNumberOfElements); // calculate average module score
            $(moduleKey).text(moduleAverageScore+"%"); // assign calculated average to module scorecard score
            
            // 7. Change progress bar
            // a.find this module key
                let thisModuleProgressId= $(this).parent().parent().parent().parent().parent().siblings().find(".module-progress-number").attr("id"); 

            // b. assign the length var to the key - progress number
                $("#"+thisModuleProgressId).text(scoredElements);
            
            // c. calculate percentage for progress bar
                const numberOfElements=$(this).parent().parent().parent().parent().parent().parent().find('.elements-section').find('.scorcard-score').length;
                let moduleProgressBarWidth = parseInt(scoredElements / numberOfElements * 100) ;
            
            // d. assign % to the progress bar 
                $(this).parent().parent().parent().parent().parent().parent().find(".module-progress-bar").css("width", moduleProgressBarWidth+"%");
            
            //8. LOCAL STORAGE. REPLACE key-value pairs with chosen score from scorecard
                
                let key=$(this).parent().parent().siblings().find(".scorcard-score").attr("id");// find card id
                
                userObject=JSON.parse(localStorage.getItem("userObject"));// retrieve object from local storage

                userObject.scores[key]=value;//change value of scored id
                userObject.scores[moduleObjectKey]=moduleAverageScore;//change value of scored id
                userObject.scores[thisModuleProgressId]=scoredElements;//change value of scored id
                
                localStorage.setItem("userObject", JSON.stringify(userObject));//????return object into LocalStorage with updated value  ???? - split to separate functions GROUP BY EVENTS.
                
            //9. CALCULATE THEORY AVERAGES
                userObject = JSON.parse(localStorage.getItem("userObject"));//retrieve object from LocalStorage
                
                const numberOfModules=$.find('.scorecard-module').length;// count number of theory modules
                let theoryHtml = userObject.scores["theory-html"]; // assign html module score to var
                let theoryCss = userObject.scores["theory-css"]; //assign css module score to var
                let theoryUcfed = userObject.scores["theory-ucfed"]; //assign ucfed module score to var
                let theoryJs = userObject.scores["theory-js"] //assign js module score to var
                let theoryIfed = userObject.scores["theory-ifed"] // assign ifed module score to var
                let theoryPythonfu = userObject.scores["theory-pythonfu"] //assign python theory module score to var
                let theoryPythonpr = userObject.scores["theory-pythonpr"]//assign python module score to var
                let theoryDcd = userObject.scores["theory-dcd"]//assign dcd module score to var
                let theoryFsd = userObject.scores["theory-fsd"]//assign fsd module score to var
                
                let theoryScoreFloat = (theoryHtml+theoryCss+theoryUcfed+theoryJs+theoryIfed+theoryPythonfu+theoryPythonpr+theoryDcd+theoryFsd)/numberOfModules; //calculate tehory score for charts
                let theoryScore=Math.round(theoryScoreFloat); //had to make a separate variable to round it, wierd
                
                //8. Assign numbers to 2 theory Donut Charts including red progress bar
                $('#theory-overall').text(theoryScore);// asign number to donut chart on theory scorring section
                $('#theory-overall-summary').text(theoryScore);// asign number to donut chart on theory scorring section

                document.getElementById("progress-bar-theory1").setAttribute("stroke-dasharray", theoryScore+", 100" ); // // asign number to donut chart progress bar on theory scorring section (for some reason JQ attr() doesnot work)
                document.getElementById("progress-bar-theory").setAttribute("stroke-dasharray", theoryScore+", 100" ); // // asign number to donut chart progress bar on theory scorring section (for some reason JQ attr() doesnot work)

                //9. Assign numbers to 2 modules progress bar including red progress bar
                const numberOfTheoryElements = $.find(".scorecard-element").length; // count all the elements scorecards without modules
            
                let allTheScoredElements = $('.scorecard-element').find('.scorcard-score').text();// return all the scored elements values within the module
                //Make an array from found values and count number of scores for all the elements.Use crazy code from https://stackoverflow.com/questions/18712347/how-to-get-numeric-value-from-string     
                
                let numberOfScoredElements = allTheScoredElements.match(/\d+/g).map(Number).length; // count number of elements that have been scored
                
                let theoryProgressBarWidth = numberOfScoredElements/numberOfTheoryElements*100; // calculate width of the theory scoring bar

                $('#theory-scoring-progress1').text(numberOfScoredElements); // 
                $('#theory-scoring-progress').text(numberOfScoredElements);
                $(".theory-progress-bar").css("width", theoryProgressBarWidth+"%");

                //9. THEORY. LOACAL STORAGE. Store donut the inputs into local storage 
                //variables

                // visual elements assigned to unique ids in userObject

                    userObject.progress["theory-scoring-progress"]=numberOfScoredElements;
                    userObject.progress["theory-scoring-progress1"]=numberOfScoredElements;

                    userObject.progressBar["theory-scoring-progress-bar"]=theoryProgressBarWidth;
                    userObject.progressBar["theory-scoring-progress-bar1"]=theoryProgressBarWidth;
                    
                    userObject.donutProgressNumbers["theory-overall"]=theoryScore;
                    userObject.donutProgressNumbers["theory-overall-summary"]=theoryScore;

                    userObject.donutProgressBar["progress-bar-theory"]=theoryScore; // check accuracy
                    userObject.donutProgressBar["progress-bar-theory1"]=theoryScore; // check accuracy
                    
                    // userObject saved in localStorage
                    localStorage.setItem("userObject", JSON.stringify(userObject));            
        });
    // 10. MODALs.
        // a. back to login
        $("#login-button").click(function(){
            $(".modal-container").removeClass("hidden");
        });
        $(".modal-container").click(function(){
            $(".modal-container").addClass("hidden");
        });

        // a. back to login
        $("#dashboard-button").click(function(){
            $(".dashboard-modal-container").removeClass("hidden");
        });
        $(".dashboard-modal-container").click(function(){
            $(".dashboard-modal-container").addClass("hidden");
        });

        
    //RESOLVE -LOGIC PAGE SCRIPT IMPACTS SCORECARD PAGE       
        // the function flips around the scorecard on logic page
            $(".scorecard-animation").click(function(){
            $(this).toggleClass("is-open");
            });
});