$(document).ready(function(){
// 1. DEFINE NEW SET OF VARIABLES -"SKILLS"- THAT EXIST ONLY ON THIS PAGE - SEE PAGE 2 OF THE DASHBOARD
    //a. find a skill IDs and place it in userObject in local Storage
        let skills = document.querySelectorAll('.skill-identifier');//specific ids
        let skillsObject = {}        // push them to sperate object
        for (let i = 0; i < skills.length; i++) {
        skillsObject[skills[i].id] = 0;
        }    
//2. RETRIEVE THE DATA SAVED FROM PREVIOUS PAGE IN LOCAL STORAGE USEROBJECT        
        // retrieve userObject from the localStoarge
        userObject=JSON.parse(localStorage.getItem("userObject")); // parse from LocalStorage
        // add skills object into userObject
        

// 3.CALCULATE SKILLS VARIABLES FOR DASHBOARD PAGE to assign it later to all

            // LANGUAGES
                skillsObject["dashboard-skill-html"]=(parseInt(userObject.scores["theory-html-document"])+parseInt(userObject.scores["theory-html-divspans"])+parseInt(userObject.scores["theory-html-links"])+parseInt(userObject.scores["theory-html-lists"])+parseInt(userObject.scores["theory-html-images"])+parseInt(userObject.scores["theory-html-forms"])+parseInt(userObject.scores["theory-html-iframes"]))/7;// HTML

                skillsObject["dashboard-skill-css"]=(parseInt(userObject.scores["theory-css-background"])+parseInt(userObject.scores["theory-css-boxmodel"])+parseInt(userObject.scores["theory-css-fonts"])+parseInt(userObject.scores["theory-css-domselectors"])+parseInt(userObject.scores["theory-css-layout"])+parseInt(userObject.scores["theory-css-priority"])+parseInt(userObject.scores["theory-css-typeclass"])+parseInt(userObject.scores["theory-css-visibility"]))/8;// CSS

                skillsObject["dashboard-skill-js"]=(parseInt(userObject.scores["theory-js-variables"])+parseInt(userObject.scores["theory-js-numbers"])+parseInt(userObject.scores["theory-js-decisions"])+parseInt(userObject.scores["theory-js-loops"])+parseInt(userObject.scores["theory-js-dom"])+parseInt(userObject.scores["theory-js-functions"])+parseInt(userObject.scores["theory-js-oop"])+parseInt(userObject.scores["theory-js-console"]))/8;//JAVASCRIPT

                skillsObject["dashboard-skill-python"]=(parseInt(userObject.scores["theory-python-numvartypes"])+parseInt(userObject.scores["theory-python-strings"])+parseInt(userObject.scores["theory-python-userinputs"])+parseInt(userObject.scores["theory-python-boolean"])+parseInt(userObject.scores["theory-python-indexing"])+parseInt(userObject.scores["theory-python-reuse"])+parseInt(userObject.scores["theory-python-scopingfunctions"])+parseInt(userObject.scores["theory-python-mdules"])+parseInt(userObject.scores["theory-python-mutability"])+parseInt(userObject.scores["theory-python-dictionaries"])+parseInt(userObject.scores["theory-python-projectsetup"])+parseInt(userObject.scores["theory-python-projectexpand"])+parseInt(userObject.scores["theory-python-upgrade"])+parseInt(userObject.scores["theory-python-datamanipulation"])+parseInt(userObject.scores["theory-python-interface"]))/15;// PYTHON

                skillsObject["dashboard-skill-sql"]=(parseInt(userObject.scores["theory-mysql-dtbmntstm"])+parseInt(userObject.scores["theory-mysql-python"]))/2;//MYSQL

            // FRAMEWORKS
                skillsObject["dashboard-skill-bootstrap"]=(parseInt(userObject.scores["theory-ucfed-bootstrap"])+parseInt(userObject.scores["theory-ucfed-gridflexbox"]))/2;//BOOTSTRAP

                skillsObject["dashboard-skill-jasmine"]=parseInt(userObject.scores["theory-ifed-jasmine"]);//JASMINE

                skillsObject["dashboard-skill-jquery"]=parseInt(userObject.scores["theory-ifed-jquery"]);//JQUERY

                skillsObject["dashboard-skill-flask"]=(parseInt(userObject.scores["theory-python-flask"])+parseInt(userObject.scores["theory-python-flaskstyles"])+parseInt(userObject.scores["theory-python-flasktemplates"]))/3;// FLASK

                skillsObject["dashboard-skill-mongo"]=(parseInt(userObject.scores["theory-mongodb-intro"])+parseInt(userObject.scores["theory-mongodb-shell"]))/2;//MONGO

                skillsObject["dashboard-skill-django"]=(parseInt(userObject.scores["theory-django-isetup"])+parseInt(userObject.scores["theory-django-urls"])+parseInt(userObject.scores["theory-django-adminmigration"])+parseInt(userObject.scores["theory-django-models"])+parseInt(userObject.scores["theory-django-deploy"])+parseInt(userObject.scores["theory-django-test"]))/6;//DAJNGO

                skillsObject["dashboard-skill-heroku"]=parseInt(userObject.scores["theory-python-heroku"]); //HEROKU

            // DEVELOPER TOOLS
                skillsObject["dashboard-skill-project"]=(parseInt(userObject.scores["theory-ucfed-setup"])+parseInt(userObject.scores["theory-ucfed-header"])+parseInt(userObject.scores["theory-ucfed-signupform"])+parseInt(userObject.scores["theory-ucfed-heroimage"])+parseInt(userObject.scores["theory-ucfed-responsiveness"])+parseInt(userObject.scores["theory-ucfed-cvsetup"]))/6;// FRONT END

                skillsObject["dashboard-skill-git"]=(parseInt(userObject.scores["theory-ucfed-git"])+parseInt(userObject.scores["theory-python-gitpod"]))/2;// GIT
                
                skillsObject["dashboard-skill-browser"]=parseInt(userObject.scores["theory-ucfed-inspect"]);//INSPECT
                
                skillsObject["dashboard-skill-api"]=(parseInt(userObject.scores["theory-ifed-datadom"])+parseInt(userObject.scores["theory-ifed-api"])+parseInt(userObject.scores["theory-ifed-apiemail"])+parseInt(userObject.scores["theory-ifed-apigithub"])+parseInt(userObject.scores["theory-ifed-apimaps"]))/5; //API
                
                skillsObject["dashboard-skill-databases"]=(parseInt(userObject.scores["theory-databases-basics"])+parseInt(userObject.scores["theory-databases-reldesign"])+parseInt(userObject.scores["theory-dcd-addtask"])+parseInt(userObject.scores["theory-dcd-setup"])+parseInt(userObject.scores["theory-dcd-navigation"]))/5;//DATABASES
                
                skillsObject["dashboard-skill-fsdframeworks"]=(parseInt(userObject.scores["theory-fsd-setupproject"])+parseInt(userObject.scores["theory-fsd-authenticate"])+parseInt(userObject.scores["theory-fsd-basetemplate"])+parseInt(userObject.scores["theory-fsd-homepage"])+parseInt(userObject.scores["theory-fsd-productssetup"])+parseInt(userObject.scores["theory-fsd-checkout"])+parseInt(userObject.scores["theory-fsd-coderefactor"])+parseInt(userObject.scores["theory-fsd-profileapp"])+parseInt(userObject.scores["theory-fsd-deploy"])+parseInt(userObject.scores["theory-fsd-emails"]))/10;//FULL STACK
                
                skillsObject["dashboard-skill-udui"]=parseInt(userObject.scores["theory-ucfed-uxd"]);//USER DESIGN

        userObject.skills=skillsObject; // add skills object into userObject
        
// 4. GENERATE AN ARRAY WITH ALL THE IDS ON A PAGE    
        //create an array with all the ids on a page
        let dashboardIds = []; 
            dashboardIds = $("*").map(function() { 
                if (this.id) { 
                    return this.id; 
                } 
            }).get();

    
        // create one single dimension object
//5.  CREATE A ONE ONE-DIMENSIONAL OBJECT WITH ALL THE VALUES FROM PREVIOUS PAGE SCORING (USEROBJECT) AND CALCULATION OF NEW "SKILLS" VARIALES ABOVE
        
    function createDashboardObject(){
        //retrieve 6 objects inside user object
        userObjectDonutProgressBar=userObject.donutProgressBar;
        userObjectDonutProgressNumbers=userObject.donutProgressNumbers;
        userObjectProgress=userObject.progress;
        userObjectProgressBar=userObject.progressBar;
        userObjectScores=userObject.scores;
        userObjectSkills=userObject.skills;
        
        // combine 6 objects inside userObject, add name them appropriately 
        let dashboardObject={...userObjectDonutProgressBar,...userObjectDonutProgressNumbers,...userObjectProgress,...userObjectProgressBar,...userObjectScores,...userObjectSkills};
        dashboardObject.name=userObject.name;// add name variable from login
        dashboardObject.email=userObject.email; // add email variable from login
        
        

// 6. USE LOOP TO ASSIGN ALL VALUES FROM ONE-DIMENSIONAL OBJECT TO ALL THE VALUE IDS ON A PAGE USING VALUES FROM ONEDIMENSIONAL OBJECT - DASHBOARDOBJECT
        
    // !! loop over Object key/value: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries - thanks to Tim from tutor support.
        for (const [key, value] of Object.entries(dashboardObject)) {
            if (`${value}`!==0){ //check if the value is 0
            $(`#${key}`).text(`${value}`);
            }else{}
        }
    }
//7. ASSIGN VISUALS ATTRIBUTES

//8. ASSIGN OTHER IDS THAT WERE MISSED IN THE STEP NUMBER 6
    createDashboardObject()

    //9.  SAVE ALL THE DATA TO LOCAL STORAGE   
    localStorage.setItem('userObject', JSON.stringify(userObject)); // save user Object

});

    //Parking lot
    /*--
        function copyScoresToDashboard(){
            for (let i=0; i<dashboardIds.length;i++){
              if(createDashboardObject.dashboardIds[i]!=0){
                dashboardIds.length[i]=
              }  else{}
            }
        }
    
    for (let i=0; i<dashboardIds.length; i++){
                      
            console.log(userObject.scores.dashboardIds[i]);
       


            
       
            --*/ 
        
