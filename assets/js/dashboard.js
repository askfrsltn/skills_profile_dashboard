$(document).ready(function(){
// 1. DEFINE NEW SET OF VARIABLES -"SKILLS"- THAT EXIST ONLY ON THIS PAGE - SEE PAGE 2 OF THE DASHBOARD
    //a. find all skill IDs and place it in userObject in local Storage
        let skills = document.querySelectorAll('.skill-identifier');//specific ids
        
        let skillsObject = {}        // push them to sperate object
        for (let i = 0; i < skills.length; i++) {
        skillsObject[skills[i].id] = 0;
        }    

    //b.   manage date stamp and place it into the dashboard
        let dates = document.querySelectorAll('.date');//specific ids        
        let datesObject = {}
        // ids update and Adutomatic date stamp for dashboard pages with the help of  https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_month
        for (let i = 0; i < dates.length; i++) {
            let date=new Date
            let months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
            let d=date.getDate()+"-"+months[date.getMonth()]+"-"+date.getFullYear();
            datesObject[dates[i].id] = d;
        }  

        //2. RETRIEVE THE DATA SAVED FROM PREVIOUS PAGE IN LOCAL STORAGE USEROBJECT        
        // retrieve userObject from the localStoarge
        userObject=JSON.parse(localStorage.getItem("userObject")); // parse from LocalStorage        

    // 3.CALCULATE SKILLS VARIABLES FOR DASHBOARD PAGE to assign it later to all

        // LANGUAGES
            // HTML
            skillsObject["dashboard-skill-html"]=parseInt((parseInt(userObject.scores["theory-html-document"])+parseInt(userObject.scores["theory-html-divspans"])+parseInt(userObject.scores["theory-html-links"])+parseInt(userObject.scores["theory-html-lists"])+parseInt(userObject.scores["theory-html-images"])+parseInt(userObject.scores["theory-html-forms"])+parseInt(userObject.scores["theory-html-iframes"]))/7)+"%"; 

            // CSS
            skillsObject["dashboard-skill-css"]=parseInt((parseInt(userObject.scores["theory-css-background"])+parseInt(userObject.scores["theory-css-boxmodel"])+parseInt(userObject.scores["theory-css-fonts"])+parseInt(userObject.scores["theory-css-domselectors"])+parseInt(userObject.scores["theory-css-layout"])+parseInt(userObject.scores["theory-css-priority"])+parseInt(userObject.scores["theory-css-typeclass"])+parseInt(userObject.scores["theory-css-visibility"]))/8)+"%"; 
            
            //JAVASCRIPT
            skillsObject["dashboard-skill-js"]=parseInt((parseInt(userObject.scores["theory-js-variables"])+parseInt(userObject.scores["theory-js-numbers"])+parseInt(userObject.scores["theory-js-decisions"])+parseInt(userObject.scores["theory-js-loops"])+parseInt(userObject.scores["theory-js-dom"])+parseInt(userObject.scores["theory-js-functions"])+parseInt(userObject.scores["theory-js-oop"])+parseInt(userObject.scores["theory-js-console"]))/8)+"%"; 

            // PYTHON
            skillsObject["dashboard-skill-python"]=parseInt((parseInt(userObject.scores["theory-python-numvartypes"])+parseInt(userObject.scores["theory-python-strings"])+parseInt(userObject.scores["theory-python-userinputs"])+parseInt(userObject.scores["theory-python-boolean"])+parseInt(userObject.scores["theory-python-indexing"])+parseInt(userObject.scores["theory-python-reuse"])+parseInt(userObject.scores["theory-python-scopingfunctions"])+parseInt(userObject.scores["theory-python-mdules"])+parseInt(userObject.scores["theory-python-mutability"])+parseInt(userObject.scores["theory-python-dictionaries"])+parseInt(userObject.scores["theory-python-projectsetup"])+parseInt(userObject.scores["theory-python-projectexpand"])+parseInt(userObject.scores["theory-python-upgrade"])+parseInt(userObject.scores["theory-python-datamanipulation"])+parseInt(userObject.scores["theory-python-interface"]))/15)+"%";

            //MYSQL
            skillsObject["dashboard-skill-sql"]=parseInt((parseInt(userObject.scores["theory-mysql-dtbmntstm"])+parseInt(userObject.scores["theory-mysql-python"]))/2)+"%";

            // FRAMEWORKS calculation
                // Bootstrap,Grid
                skillsObject["dashboard-skill-bootstrap"]=parseInt((parseInt(userObject.scores["theory-ucfed-bootstrap"])+parseInt(userObject.scores["theory-ucfed-gridflexbox"]))/2)+"%";
  
                //JASMINE
                skillsObject["dashboard-skill-jasmine"]=parseInt(userObject.scores["theory-ifed-jasmine"])+"%";
                
                //JQUERY
                skillsObject["dashboard-skill-jquery"]=parseInt(userObject.scores["theory-ifed-jquery"])+"%";

                // FLASK
                skillsObject["dashboard-skill-flask"]=parseInt((parseInt(userObject.scores["theory-python-flask"])+parseInt(userObject.scores["theory-python-flaskstyles"])+parseInt(userObject.scores["theory-python-flasktemplates"]))/3)+"%";
                
                //MONGO
                skillsObject["dashboard-skill-mongo"]=parseInt((parseInt(userObject.scores["theory-mongodb-intro"])+parseInt(userObject.scores["theory-mongodb-shell"]))/2)+"%";

                //DAJNGO
                skillsObject["dashboard-skill-django"]=parseInt((parseInt(userObject.scores["theory-django-isetup"])+parseInt(userObject.scores["theory-django-urls"])+parseInt(userObject.scores["theory-django-adminmigration"])+parseInt(userObject.scores["theory-django-models"])+parseInt(userObject.scores["theory-django-deploy"])+parseInt(userObject.scores["theory-django-test"]))/6)+"%";

                //HEROKU
                skillsObject["dashboard-skill-heroku"]=parseInt(userObject.scores["theory-python-heroku"])+"%"; 

            // DEVELOPER TOOLS
                // FRONT END
                skillsObject["dashboard-skill-project"]=parseInt((parseInt(userObject.scores["theory-ucfed-setup"])+parseInt(userObject.scores["theory-ucfed-header"])+parseInt(userObject.scores["theory-ucfed-signupform"])+parseInt(userObject.scores["theory-ucfed-heroimage"])+parseInt(userObject.scores["theory-ucfed-responsiveness"])+parseInt(userObject.scores["theory-ucfed-cvsetup"]))/6)+"%";

                // GIT
                skillsObject["dashboard-skill-git"]=parseInt((parseInt(userObject.scores["theory-ucfed-git"])+parseInt(userObject.scores["theory-python-gitpod"]))/2)+"%";
                
                //INSPECT
                skillsObject["dashboard-skill-browser"]=parseInt(userObject.scores["theory-ucfed-inspect"])+"%";
                
                //API
                skillsObject["dashboard-skill-api"]=parseInt((parseInt(userObject.scores["theory-ifed-datadom"])+parseInt(userObject.scores["theory-ifed-api"])+parseInt(userObject.scores["theory-ifed-apiemail"])+parseInt(userObject.scores["theory-ifed-apigithub"])+parseInt(userObject.scores["theory-ifed-apimaps"]))/5)+"%"; 
                
                //DATABASES
                skillsObject["dashboard-skill-databases"]=parseInt((parseInt(userObject.scores["theory-databases-basics"])+parseInt(userObject.scores["theory-databases-reldesign"])+parseInt(userObject.scores["theory-dcd-addtask"])+parseInt(userObject.scores["theory-dcd-setup"])+parseInt(userObject.scores["theory-dcd-navigation"]))/5)+"%";
                
                //FULL STACK
                skillsObject["dashboard-skill-fsdframeworks"]=parseInt((parseInt(userObject.scores["theory-fsd-setupproject"])+parseInt(userObject.scores["theory-fsd-authenticate"])+parseInt(userObject.scores["theory-fsd-basetemplate"])+parseInt(userObject.scores["theory-fsd-homepage"])+parseInt(userObject.scores["theory-fsd-productssetup"])+parseInt(userObject.scores["theory-fsd-checkout"])+parseInt(userObject.scores["theory-fsd-coderefactor"])+parseInt(userObject.scores["theory-fsd-profileapp"])+parseInt(userObject.scores["theory-fsd-deploy"])+parseInt(userObject.scores["theory-fsd-emails"]))/10)+"%";
                
                //USER DESIGN
                skillsObject["dashboard-skill-udui"]=parseInt(userObject.scores["theory-ucfed-uxd"])+"%";

        userObject.skills=skillsObject; // add skills object into userObject
        userObject.dates=datesObject; // add dates object into userObject

// 4. GENERATE AN ARRAY WITH ALL THE IDS ON A PAGE    
        //create an array with all the ids on a page
        let dashboardIds = []; 
            dashboardIds = $("*").map(function() { 
                if (this.id) { 
                    return this.id; 
                } 
            }).get();

//5.  CREATE A ONE ONE-DIMENSIONAL OBJECT WITH ALL THE VALUES FROM PREVIOUS PAGE SCORING (USEROBJECT) AND CALCULATION OF NEW "SKILLS" VARIALES as ABOVE
        
        //retrieve 6 objects from user object
        userObjectDonutProgressBar=userObject.donutProgressBar;
        userObjectDonutProgressNumbers=userObject.donutProgressNumbers;
        userObjectProgress=userObject.progress;
        userObjectProgressBar=userObject.progressBar;
        userObjectScores=userObject.scores;
        userObjectSkills=userObject.skills;
        userObjectDates=userObject.dates
        
        // combine 7 objects inside dashboard Object, add name them appropriately 
        let dashboardObject={...userObjectDonutProgressBar,...userObjectDonutProgressNumbers,...userObjectProgress,...userObjectProgressBar,...userObjectScores,...userObjectSkills,...userObjectDates};
        
        loginObject=JSON.parse(localStorage.getItem("loginObject"));
        
        dashboardObject.name=loginObject.name;// add name variable from login into Dashboard object
        dashboardObject.email=loginObject.email; // add email variable from login into Dashboard object
   
// 6. USE LOOP TO ASSIGN ALL VALUES FROM ONE-DIMENSIONAL OBJECT TO ALL THE VALUE IDS ON A PAGE - DASHBOARDOBJECT
    // !! loop over Object key/value: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries - thanks to Tim from tutor support.
        for (const [key, value] of Object.entries(dashboardObject)) {
            if (`${value}`!==0){ //check if the value is 0
            $(`#${key}`).text(`${value}`);
            }else{}
        }

//7. ASSIGN VISUALS ATTRIBUTES
    // a. DONUT CHART BARS. visuals for Donut charts
        document.getElementById("progress-bar").setAttribute("stroke-dasharray", userObject.donutProgressBar["progress-bar"]+", 100" );//set up a progress bar on the project donut chart
        document.getElementById("progress-bar-theory").setAttribute("stroke-dasharray", userObject.donutProgressBar["progress-bar-theory"]+", 100" );//set up a progress bar on the project donut chart
    
    // b. ROJECTS MEDALS. find project medals check the value, add class. I simply hard coded the style condition, it took me 20 min, before that I spent 3 hours tring to find the way to make 1) an array of ids and values, 2) create a switch condition inside the loop to addclass depending on 60,80 or 100. BUT It works.
        
        let ucfed=$("#projects-ucfed").text();
        let ifed=$("#projects-ifed").text();
        let dcd=$("#projects-dcd").text();
        let fsd=$("#projects-fsd").text();

        if(ucfed==60){
        $("#projects-ucfed").parent().parent().addClass("bronze");
        } else if (ucfed==80){$("#projects-ucfed").parent().parent().addClass("silver");} else if (ucfed==100){$("#projects-ucfed").parent().parent().addClass("gold");}else{}
        
        if(ifed==60){
            $("#projects-ifed").parent().parent().addClass("bronze");
        } else if (ifed==80){$("#projects-ifed").parent().parent().addClass("silver");} else if (ifed==100){$("#projects-ifed").parent().parent().addClass("gold");}else{}

        if(dcd==60){
            $("#projects-dcd").parent().parent().addClass("bronze");
        } else if (dcd==80){$("#projects-dcd").parent().parent().addClass("silver");} else if (dcd==100){$("#projects-dcd").parent().parent().addClass("gold");}else{}

        if(fsd==60){
            $("#projects-fsd").parent().parent().addClass("bronze");
        } else if (fsd==80){$("#projects-fsd").parent().parent().addClass("silver");} else if (fsd==100){$("#projects-fsd").parent().parent().addClass("gold");}else{}
    
    // c. MODULE BARS. 
        $("#theory-html").css("width",userObject.scores["theory-html"]+"%");
        $("#theory-css").css("width",userObject.scores["theory-css"]+"%");
        $("#theory-ucfed").css("width",userObject.scores["theory-ucfed"]+"%");
        $("#theory-js").css("width",userObject.scores["theory-js"]+"%");
        $("#theory-ifed").css("width",userObject.scores["theory-ifed"]+"%");
        $("#theory-pythonfu").css("width",userObject.scores["theory-pythonfu"]+"%");
        $("#theory-pythonpr").css("width",userObject.scores["theory-pythonpr"]+"%");
        $("#theory-dcd").css("width",userObject.scores["theory-dcd"]+"%");
        $("#theory-fsd").css("width",userObject.scores["theory-fsd"]+"%");
    
    // e. SKILLS BARS. 
        //languages
        $("#dashboard-skill-html").css("width",dashboardObject["dashboard-skill-html"]);
        $("#dashboard-skill-css").css("width",dashboardObject["dashboard-skill-css"]);
        $("#dashboard-skill-js").css("width",dashboardObject["dashboard-skill-js"]);
        $("#dashboard-skill-python").css("width",dashboardObject["dashboard-skill-python"]);
        $("#dashboard-skill-sql").css("width",dashboardObject["dashboard-skill-sql"]);
    
        //frameworks
        $("#dashboard-skill-bootstrap").css("width",dashboardObject["dashboard-skill-bootstrap"]);
        $("#dashboard-skill-jasmine").css("width",dashboardObject["dashboard-skill-jasmine"]);
        $("#dashboard-skill-jquery").css("width",dashboardObject["dashboard-skill-jquery"]);
        $("#dashboard-skill-flask").css("width",dashboardObject["dashboard-skill-flask"]);
        $("#dashboard-skill-heroku").css("width",dashboardObject["dashboard-skill-heroku"]);
        $("#dashboard-skill-mongo").css("width",dashboardObject["dashboard-skill-mongo"]);
        $("#dashboard-skill-django").css("width",dashboardObject["dashboard-skill-django"]);

        // developer tools
        $("#dashboard-skill-project").css("width",dashboardObject["dashboard-skill-project"]);
        $("#dashboard-skill-browser").css("width",dashboardObject["dashboard-skill-browser"]);
        $("#dashboard-skill-api").css("width",dashboardObject["dashboard-skill-api"]);
        $("#dashboard-skill-databases").css("width",dashboardObject["dashboard-skill-databases"]);
        $("#dashboard-skill-fsdframeworks").css("width",dashboardObject["dashboard-skill-fsdframeworks"]);
        $("#dashboard-skill-udui").css("width",dashboardObject["dashboard-skill-udui"]);

//8. ASSIGN OTHER IDS THAT WERE MISSED IN THE STEP NUMBER 6
    $("#name1").text(loginObject.name);//name to second page id

//9.  SAVE ALL THE DATA TO LOCAL STORAGE   
    localStorage.setItem('userObject', JSON.stringify(userObject)); // save user Object

// 10. MODAL.SUMMARY

    $("#summary-button").click(function(){
        $(".modal-container").removeClass("hidden");
    });
    $(".modal-container").click(function(){
        $(".modal-container").addClass("hidden");
    });
});

        
